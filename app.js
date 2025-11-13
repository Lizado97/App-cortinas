// app.js (module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot, query, orderBy
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// ------------------- CONFIGURA AQUÍ tu Firebase -------------------
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTHDOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MSG_ID",
  appId: "TU_APP_ID"
};
// -----------------------------------------------------------------

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const presupuestosRef = collection(db, "presupuestos");

// ---------------------------------------------------------------
// Datos (copiado y adaptado de tu index original)
const TEJIDOS = [
  { nombre: "AALBORG 110-111-114", precio: 41.28, ancho: 300, composicion: "50% Pes 50% Li" },
  { nombre: "ABI", precio: 35.13, ancho: 300, composicion: "100% Pes" },
  { nombre: "ANETO", precio: 38.40, ancho: 300, composicion: "100%Pes" },
  { nombre: "ASPEN BCO/CRUDO", precio: 43.70, ancho: 300, composicion: "50% Pes 50% Li" },
  { nombre: "ASPEN LINO", precio: 45.45, ancho: 300, composicion: "50% Pes 50% Li" },
  { nombre: "BAVAY", precio: 48.60, ancho: 300, composicion: "50% Pes 50% Li" },
  { nombre: "BEGUR", precio: 43.50, ancho: 300, composicion: "60% Pes 40% Li" },
  { nombre: "BIBLOS", precio: 27.52, ancho: 300, composicion: "80% Pes 20% Li" },
  { nombre: "BLITZ", precio: 39.67, ancho: 300, composicion: "58% Pes 42% Li" },
  { nombre: "BRERA", precio: 39.10, ancho: 300, composicion: "50% Pes 50% Li" },
  { nombre: "ECLIPSE", precio: 31.87, ancho: 300, composicion: "65% Pes 35% Li" },
  { nombre: "ELISE BCO/CRUDO", precio: 28.07, ancho: 300, composicion: "50% Pes 50% Li" },
  { nombre: "ELISE LINO", precio: 31.43, ancho: 300, composicion: "50% Pes 50% Li" },
  { nombre: "MILAN BCO/CRUDO", precio: 43.50, ancho: 300, composicion: "60% Pes 40% Li" },
  { nombre: "MORITZ", precio: 35.75, ancho: 300, composicion: "50% Pes 50% Li" },
  { nombre: "MULHACEN", precio: 38.40, ancho: 300, composicion: "100%Pes" },
  { nombre: "NEUTRA", precio: 31.15, ancho: 300, composicion: "50% Pes 50% Li" },
  { nombre: "RACK", precio: 25.34, ancho: 300, composicion: "100% Pes" },
  { nombre: "SIESTA", precio: 39.27, ancho: 300, composicion: "60% Pes 40% Li" }
];

const SISTEMAS = [
  { nombre: "Estor a Cadena - Paquetto", precios: {75:52.20, 100:57.38, 125:67.80, 150:77.19, 175:79.18, 200:88.61, 225:103.04, 250:107.97, 275:117.27, 300:126.66} },
  { nombre: "Estor a Cadena - Plegable", precios: {75:54.01, 100:59.91, 125:69.94, 150:82.26, 175:89.06, 200:94.02, 225:108.11, 250:116.51, 275:128.41, 300:136.81} },
  { nombre: "Guía Manual 1 Vía - Convencional", precios: {100:10.17, 125:12.86, 150:15.01, 175:16.74, 200:18.87, 225:20.95, 250:24.10, 275:26.42, 300:28.90} },
  { nombre: "Guía Manual 1 Vía - Onda Perfecta", precios: {100:23.10, 125:29.03, 150:34.41, 175:39.38, 200:44.74, 225:50.06, 250:56.44, 275:61.99, 300:67.70} }
];

const CONFECCION = {
  "estor_paquetto": {100:60.08, 150:72.10, 200:84.12, 250:96.13, 300:120.17, 350:132.18},
  "estor_plegable": {100:72.10, 150:84.12, 200:96.13, 250:108.15, 300:126.17, 350:138.20},
  "cortina_onda_perfecta": {100:43.25, 150:55.28, 200:67.29, 250:79.31, 300:91.33, 350:103.34},
  "cortina_fruncida": {100:43.25, 150:55.28, 200:67.29, 250:79.31, 300:91.33, 350:103.34},
  "cortina_plana": {100:31.24, 150:43.25, 200:55.28, 250:60.08, 300:66.09, 350:78.11},
  "cortina_ollados": {100:31.24, 150:43.25, 200:55.28, 250:60.08, 300:66.09, 350:78.11},
  "cortina_triple_pliegue": {100:56.23, 150:71.86, 200:87.48, 250:103.11, 300:118.72, 350:134.34},
  "cortina_palas": {100:43.25, 150:55.28, 200:67.29, 250:79.31, 300:91.33, 350:103.34}
};

const TIPOS = [
  { value: "estor_paquetto", label: "Estor Paquetto (sin varillas)" },
  { value: "estor_plegable", label: "Estor Plegable (con varillas)" },
  { value: "cortina_onda_perfecta", label: "Cortina Onda Perfecta" },
  { value: "cortina_fruncida", label: "Cortina Fruncida" },
  { value: "cortina_plana", label: "Cortina Plana sin Frunce" },
  { value: "cortina_ollados", label: "Cortina con Ollados" },
  { value: "cortina_triple_pliegue", label: "Cortina Triple Pliegue" },
  { value: "cortina_palas", label: "Cortina Palas" }
];

const IVA = 0.21;

// Estado local (mientras se edita)
let items = [];
let editId = null; // id del documento Firestore si estamos editando

// ---------------- DOM ----------------
const $ = id => document.getElementById(id);
const tipoSelect = $('tipo-cortina');
const tejidoSelect = $('tejido');
const sistemaSelect = $('sistema');
const btnAgregar = $('btn-agregar');
const itemsList = $('items-list');
const totalItemsEl = $('total-items');
const subtotalEl = $('subtotal');
const totalEl = $('total');
const btnGuardar = $('btn-guardar');
const btnPdf = $('btn-pdf');
const form = $('form-presupuesto');
const listaPresupuestos = $('lista-presupuestos');
const statTotalPresup = $('stat-total-presup');
const statImporte = $('stat-importe');
const tituloForm = $('titulo-form');
const notasEl = $('notas');

// inputs cliente
const clienteNombre = $('cliente-nombre');
const clienteTelefono = $('cliente-telefono');
const clienteEmail = $('cliente-email');
const clienteDireccion = $('cliente-direccion');

// medidas
const anchoEl = $('ancho');
const altoEl = $('alto');

// botones lista lateral
$('btn-nuevo').addEventListener('click', () => abrirNuevo());
$('btn-refrescar').addEventListener('click', cargarPresupuestos);
$('btn-export-todos').addEventListener('click', exportTodosCSV);

// Inicializar selects y listeners
function initUI(){
  TIPOS.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.value; opt.textContent = t.label;
    tipoSelect.appendChild(opt);
  });

  TEJIDOS.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.nombre;
    opt.textContent = ${t.nombre} - ${t.precio}€/ml (${t.composicion});
    tejidoSelect.appendChild(opt);
  });

  SISTEMAS.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.nombre; opt.textContent = s.nombre;
    sistemaSelect.appendChild(opt);
  });

  btnAgregar.addEventListener('click', agregarItem);
  btnGuardar.addEventListener('click', guardarPresupuesto);
  btnPdf.addEventListener('click', generarPDF);
}

initUI();

// ---------------- Cálculos ----------------
function calcularItem(tipo, ancho, alto, tejidoNombre, sistemaNombre){
  const tejido = TEJIDOS.find(t => t.nombre === tejidoNombre);
  if (!tejido) throw new Error('Tejido no encontrado');

  let multiplicador = 1;
  let tejidoMetros = 0;
  if (tipo === 'estor_paquetto' || tipo === 'estor_plegable') {
    tejidoMetros = (ancho + 40) / 100;
  } else if (tipo === 'cortina_onda_perfecta') {
    multiplicador = 2.4; tejidoMetros = (ancho * multiplicador) / 100;
  } else if (tipo === 'cortina_ollados') {
    multiplicador = 2.2; tejidoMetros = (ancho * multiplicador) / 100;
  } else if (tipo === 'cortina_plana') {
    tejidoMetros = (ancho * 1.4) / 100;
  } else if ( tipo === 'cortina_fruncida' ) {
    multiplicador = 2.5; tejidoMetros = (ancho * multiplicador) / 100;
  } else if ( tipo === 'cortina_triple_pliegue') {
    multiplicador = 2.7; tejidoMetros = (ancho * multiplicador) / 100;
  } else if ( tipo === 'cortina_palas' ) {
    multiplicador = 2.6; tejidoMetros = (ancho * multiplicador) / 100;
  }

  const precioTejido = tejidoMetros * tejido.precio;

  const confeccion = CONFECCION[tipo] || {};
  let precioConfeccion = 0;
  if (ancho <= 100) precioConfeccion = confeccion[100] || 0;
  else if (ancho <= 150) precioConfeccion = confeccion[150] || 0;
  else if (ancho <= 200) precioConfeccion = confeccion[200] || 0;
  else if (ancho <= 250) precioConfeccion = confeccion[250] || 0;
  else if (ancho <= 300) precioConfeccion = confeccion[300] || 0;
  else precioConfeccion = confeccion[350] || confeccion[300] || 0;

  // sistema
  let precioSistema = 0;
  if (sistemaNombre) {
    const s = SISTEMAS.find(x => x.nombre === sistemaNombre);
    if (s) {
      if (ancho <= 100) precioSistema = s.precios[100] || 0;
      else if (ancho <= 150) precioSistema = s.precios[150] || 0;
      else if (ancho <= 200) precioSistema = s.precios[200] || 0;
      else if (ancho <= 250) precioSistema = s.precios[250] || 0;
      else precioSistema = s.precios[300] || 0;
    }
  }

  const total = precioTejido + precioConfeccion + precioSistema;
  return { precioTejido, precioConfeccion, precioSistema, total, metros: tejidoMetros };
}

function agregarItem(){
  const tipo = tipoSelect.value;
  const ancho = parseFloat(anchoEl.value);
  const alto = parseFloat(altoEl.value);
  const tejido = tejidoSelect.value;
  const sistema = sistemaSelect.value;

  if (!tipo || !ancho || !alto || !tejido) {
    alert('Completa los campos obligatorios: Tipo, Ancho, Alto y Tejido');
    return;
  }

  const calc = calcularItem(tipo, ancho, alto, tejido, sistema);
  const descripcion = TIPOS.find(t => t.value === tipo)?.label || tipo;

  const item = {
    id: Date.now(),
    tipo,
    descripcion: ${descripcion} - ${tejido},
    ancho, alto, tejido, sistema,
    precio_total: parseFloat(calc.total.toFixed(2))
  };

  items.push(item);
  renderItems();
  limpiarCamposMedida();
  actualizarResumen();
}

function limpiarCamposMedida(){
  tipoSelect.value = '';
  anchoEl.value = '';
  altoEl.value = '';
  tejidoSelect.value = '';
  sistemaSelect.value = '';
}

function renderItems(){
  itemsList.innerHTML = '';
  if (items.length === 0) {
    itemsList.innerHTML = <div class="text-muted small">No hay items añadidos</div>;
    return;
  }
  items.forEach((it, idx) => {
    const el = document.createElement('div');
    el.className = 'list-group-item';
    el.innerHTML = `
      <div>
        <div class="fw-semibold">#${idx+1} - ${it.descripcion}</div>
        <small class="text-muted">Medidas: ${it.ancho} x ${it.alto} cm</small>
      </div>
      <div class="text-end d-flex align-items-center gap-2">
        <div class="fw-bold">${it.precio_total.toFixed(2)}€</div>
        <div>
          <button class="btn btn-sm btn-outline-secondary" data-id="${it.id}" title="Editar">✏</button>
          <button class="btn btn-sm btn-outline-danger" data-del="${it.id}" title="Eliminar">🗑</button>
        </div>
      </div>
    `;
    itemsList.appendChild(el);

    el.querySelector('[data-del]')?.addEventListener('click', e=>{
      const id = Number(e.currentTarget.getAttribute('data-del'));
      items = items.filter(x=>x.id !== id);
      renderItems(); actualizarResumen();
    });

    el.querySelector('[data-id]')?.addEventListener('click', e=>{
      const id = Number(e.currentTarget.getAttribute('data-id'));
      const it = items.find(x=>x.id===id);
      if (!it) return;
      // rellenar formulario para edición temporal del item (simple: eliminar y reañadir)
      tipoSelect.value = it.tipo; tejidoSelect.value = it.tejido; sistemaSelect.value = it.sistema;
      anchoEl.value = it.ancho; altoEl.value = it.alto;
      // eliminar item actual y dejar listo para recalcular
      items = items.filter(x=>x.id !== id);
      renderItems(); actualizarResumen();
    });
  });
}

function actualizarResumen(){
  const subtotal = items.reduce((s,i)=>s+i.precio_total,0);
  const iva = subtotal * IVA;
  const total = subtotal + iva;
  totalItemsEl.textContent = items.length;
  subtotalEl.textContent = subtotal.toFixed(2) + '€';
  totalEl.textContent = total.toFixed(2) + '€';
}

// ---------------- Firestore: Guardar / Cargar / Editar / Borrar ----------------

async function guardarPresupuesto(){
  if (!clienteNombre.value.trim()) { alert('Introduce el nombre del cliente'); clienteNombre.focus(); return; }
  if (items.length === 0) { alert('Añade al menos un item'); return; }

  const subtotal = items.reduce((s,i)=>s+i.precio_total,0);
  const total_con_iva = parseFloat((subtotal * (1 + IVA)).toFixed(2));

  const docData = {
    cliente_nombre: clienteNombre.value,
    cliente_telefono: clienteTelefono.value,
    cliente_email: clienteEmail.value,
    cliente_direccion: clienteDireccion.value,
    fecha: new Date().toISOString().split('T')[0],
    items,
    total_sin_iva: subtotal,
    total_con_iva,
    estado: 'borrador',
    notas: notasEl.value || '',
    creado_en: new Date().toISOString()
  };

  try {
    if (editId) {
      await updateDoc(doc(db, "presupuestos", editId), docData);
      alert('Presupuesto actualizado correctamente');
      editId = null;
      tituloForm.textContent = 'Nuevo Presupuesto';
    } else {
      await addDoc(presupuestosRef, docData);
      alert('Presupuesto guardado correctamente');
    }
    limpiarFormulario();
  } catch (err) {
    console.error(err);
    alert('Error al guardar en Firebase: ' + err.message);
  }
}

function limpiarFormulario(){
  form.reset();
  items = [];
  renderItems();
  actualizarResumen();
  editId = null;
  tituloForm.textContent = 'Nuevo Presupuesto';
}

// Cargar presupuestos y mantener en tiempo real
async function cargarPresupuestos(){
  listaPresupuestos.innerHTML = <div class="text-muted small">Cargando...</div>;
  try {
    // escuchamos la colección ordenada por fecha (más reciente arriba)
    const q = query(presupuestosRef, orderBy('creado_en','desc'));
    onSnapshot(q, snapshot=>{
      listaPresupuestos.innerHTML = '';
      let totalImporte = 0;
      let totalCount = 0;
      if (snapshot.empty) {
        listaPresupuestos.innerHTML = <div class="text-muted small">No hay presupuestos aún.</div>;
      } else {
        snapshot.forEach(docSnap=>{
          totalCount++;
          const p = { id: docSnap.id, ...docSnap.data() };
          totalImporte += (p.total_con_iva || 0);
          const a = document.createElement('a');
          a.href = "#";
          a.className = 'list-group-item list-group-item-action';
          a.innerHTML = `<div class="d-flex w-100 justify-content-between">
                          <div><strong>${p.cliente_nombre}</strong><br><small class="text-muted">${p.fecha}</small></div>
                          <div class="text-end"><strong>${(p.total_con_iva||0).toFixed(2)}€</strong><br><small class="text-muted">${p.items.length} ítems</small></div>
                        </div>`;
          a.addEventListener('click', (ev)=>{
            ev.preventDefault();
            verPresupuesto(p);
          });
          listaPresupuestos.appendChild(a);
        });
      }
      statTotalPresup.textContent = totalCount;
      statImporte.textContent = totalImporte.toFixed(0) + '€';
    }, err=>{
      console.error(err);
      listaPresupuestos.innerHTML = <div class="text-danger small">Error cargando presupuestos</div>;
    });
  } catch (err) {
    console.error(err);
    listaPresupuestos.innerHTML = <div class="text-danger small">Error: ${err.message}</div>;
  }
}

// Ver presupuesto: cargar en formulario para editar o generar PDF
function verPresupuesto(p){
  // llenar formulario
  clienteNombre.value = p.cliente_nombre || '';
  clienteTelefono.value = p.cliente_telefono || '';
  clienteEmail.value = p.cliente_email || '';
  clienteDireccion.value = p.cliente_direccion || '';
  notasEl.value = p.notas || '';
  items = p.items || [];
  renderItems(); actualizarResumen();
  editId = p.id;
  tituloForm.textContent = Editar - ${p.cliente_nombre};
  // scroll al editor
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // añadir controles rápidos: borrar y descargar PDF
  // (para borrar usamos confirm)
  // añadimos botones temporales si no existen
  if (!document.getElementById('_del_btn')) {
    const delBtn = document.createElement('button');
    delBtn.id = '_del_btn';
    delBtn.className = 'btn btn-danger ms-2';
    delBtn.textContent = 'Eliminar';
    delBtn.addEventListener('click', async ()=>{
      if (!confirm('¿Eliminar presupuesto?')) return;
      try {
        await deleteDoc(doc(db, "presupuestos", editId));
        alert('Presupuesto eliminado');
        limpiarFormulario();
      } catch (err) {
        console.error(err); alert('Error al eliminar: ' + err.message);
      }
    });
    document.querySelector('header, nav')?.after(delBtn);
  }
}

// ---------------- PDF ----------------
function generarPDF(){
  if (!clienteNombre.value.trim()) { alert('Introduce nombre del cliente para generar el PDF'); return; }
  if (items.length === 0) { alert('Añade al menos un item'); return; }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p','mm','a4');
  const left = 15;
  const top = 20;

  // Header color block
  doc.setFillColor(37,99,235);
  doc.rect(0,0,210,30,'F');

  // Logo pequeño (dibujado simple)
  doc.setTextColor(255,255,255);
  doc.setFontSize(16);
  doc.text('Canotex', left + 4, 18);

  doc.setFontSize(11);
  doc.text(Fecha: ${new Date().toLocaleDateString('es-ES')}, 160, 18);
  doc.setDrawColor(200);
  doc.setLineWidth(0.2);
  doc.line(left, 36, 195, 36);

  // Cliente
  doc.setTextColor(0,0,0);
  doc.setFontSize(12);
  doc.text('Cliente:', left, 46);
  doc.setFontSize(10);
  doc.text(clienteNombre.value, left, 52);
  if (clienteTelefono.value) doc.text('Tel: ' + clienteTelefono.value, left, 58);
  if (clienteEmail.value) doc.text('Email: ' + clienteEmail.value, left, 64);
  if (clienteDireccion.value) doc.text('Dirección: ' + clienteDireccion.value, left, 70);

  // Tabla cabecera
  let y = 82;
  doc.setFontSize(10);
  doc.text('#', left, y);
  doc.text('Descripción', left + 10, y);
  doc.text('Medidas', 120, y);
  doc.text('Precio', 170, y, { align: 'right' });
  y += 6;

  // Items
  items.forEach((it, i)=>{
    doc.setFontSize(9);
    doc.text(String(i+1), left, y);
    doc.text(it.descripcion, left + 10, y);
    doc.text(${it.ancho} x ${it.alto} cm, 120, y);
    doc.text(it.precio_total.toFixed(2) + '€', 170, y, { align: 'right' });
    y += 6;
    if (y > 250) { doc.addPage(); y = 20; }
  });

  // Totales
  const subtotal = items.reduce((s,i)=>s+i.precio_total,0);
  const iva = subtotal * IVA;
  const total = subtotal + iva;
  y += 8;
  doc.setDrawColor(200); doc.line(120, y, 195, y); y += 6;
  doc.text('Subtotal:', 130, y);
  doc.text(subtotal.toFixed(2) + '€', 195, y, { align: 'right' }); y += 6;
  doc.text('IVA (21%):', 130, y); doc.text(iva.toFixed(2) + '€', 195, y, { align: 'right' }); y += 6;
  doc.setFontSize(12);
  doc.text('TOTAL:', 130, y); doc.text(total.toFixed(2) + '€', 195, y, { align: 'right' });

  // Notas y firma
  y += 16;
  if (notasEl.value) {
    doc.setFontSize(10);
    doc.text('Notas:', left, y); y += 6;
    doc.setFontSize(9);
    const splitted = doc.splitTextToSize(notasEl.value, 170);
    doc.text(splitted, left, y);
    y += splitted.length * 6;
  }

  // Firma (cuadro)
  doc.setDrawColor(0); doc.rect(130, y+8, 60, 25);
  doc.setFontSize(9); doc.text('Firma representante', 136, y + 24);

  // Guardar
  const filename = Presupuesto-${clienteNombre.value.replace(/\s+/g,'_')}-${new Date().toISOString().slice(0,10)}.pdf;
  doc.save(filename);
}

// ---------------- Export CSV (simple) ----------------
async function exportTodosCSV(){
  try {
    const snapshot = await getDocs(presupuestosRef);
    const rows = [];
    snapshot.forEach(d=>{
      const p = d.data();
      rows.push({
        id: d.id,
        fecha: p.fecha || '',
        cliente: p.cliente_nombre || '',
        total: p.total_con_iva || 0,
        items: (p.items || []).length,
        notas: p.notas || ''
      });
    });
    if (rows.length === 0) { alert('No hay datos para exportar'); return; }
    const csv = [
      ['id','fecha','cliente','total','items','notas'],
      ...rows.map(r => [r.id, r.fecha, "${r.cliente.replace(/"/g,'""')}", r.total, r.items, "${(r.notas||'').replace(/"/g,'""')}"])
    ].map(r=>r.join(',')).join('\r\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'presupuestos.csv';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error(err); alert('Error exportando CSV: ' + err.message);
  }
}

// ---------------- Iniciar carga inicial ----------------
cargarPresupuestos();
renderItems();
actualizarResumen();
