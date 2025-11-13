<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canotex - Sistema de Presupuestos de Cortinas</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 2rem;
        }

        .header {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header h1 {
            color: #1e293b;
            font-size: 2rem;
        }

        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }

        .btn-primary {
            background: #2563eb;
            color: white;
        }

        .btn-primary:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37,99,235,0.3);
        }

        .btn-secondary {
            background: #64748b;
            color: white;
        }

        .btn-secondary:hover {
            background: #475569;
        }

        .btn-danger {
            background: #ef4444;
            color: white;
        }

        .card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }

        .card h2 {
            color: #1e293b;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #475569;
            font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            font-size: 1rem;
            transition: border 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }

        .grid {
            display: grid;
            gap: 1.5rem;
        }

        .grid-2 {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 768px) {
            .grid-2 {
                grid-template-columns: 1fr;
            }
        }

        .item-list {
            margin-top: 1rem;
        }

        .item {
            background: #f8fafc;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #e2e8f0;
        }

        .item-info {
            flex: 1;
        }

        .item-info h4 {
            color: #1e293b;
            margin-bottom: 0.5rem;
        }

        .item-info p {
            color: #64748b;
            font-size: 0.875rem;
        }

        .item-price {
            font-size: 1.25rem;
            font-weight: bold;
            color: #2563eb;
            margin-right: 1rem;
        }

        .resumen {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: white;
            padding: 2rem;
            border-radius: 12px;
            position: sticky;
            top: 2rem;
        }

        .resumen h3 {
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
        }

        .resumen-linea {
            display: flex;
            justify-content: space-between;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.2);
        }

        .resumen-total {
            font-size: 1.75rem;
            font-weight: bold;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 2px solid rgba(255,255,255,0.3);
        }

        .hidden {
            display: none;
        }

        .tabla {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }

        .tabla thead {
            background: #f8fafc;
        }

        .tabla th {
            padding: 1rem;
            text-align: left;
            color: #475569;
            font-weight: 600;
            border-bottom: 2px solid #e2e8f0;
        }

        .tabla td {
            padding: 1rem;
            border-bottom: 1px solid #e2e8f0;
            color: #1e293b;
        }

        .tabla tbody tr:hover {
            background: #f8fafc;
            cursor: pointer;
        }

        .badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
        }

        .badge-borrador {
            background: #e2e8f0;
            color: #475569;
        }

        .badge-enviado {
            background: #dbeafe;
            color: #1e40af;
        }

        .badge-aceptado {
            background: #dcfce7;
            color: #166534;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
            .stats {
                grid-template-columns: 1fr;
            }
        }

        .stat-card {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .stat-card h3 {
            font-size: 0.875rem;
            opacity: 0.9;
            margin-bottom: 0.5rem;
        }

        .stat-card .value {
            font-size: 2rem;
            font-weight: bold;
        }

        @media print {
            body {
                background: white;
            }
            .btn, .hidden-print {
                display: none !important;
            }
            .card {
                box-shadow: none;
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Vista Dashboard -->
        <div id="dashboard-view">
            <div class="header">
                <div>
                    <h1>🪟 Canotex - Sistema de Presupuestos</h1>
                    <p style="color: #64748b; margin-top: 0.5rem;">Gestión de presupuestos de cortinas</p>
                </div>
                <button class="btn btn-primary" onclick="mostrarVista('nuevo')">
                    ➕ Nuevo Presupuesto
                </button>
            </div>

            <div class="stats">
                <div class="stat-card">
                    <h3>Total Presupuestos</h3>
                    <div class="value" id="total-presupuestos">0</div>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                    <h3>Importe Total</h3>
                    <div class="value" id="total-importe">0€</div>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
                    <h3>Este Mes</h3>
                    <div class="value" id="total-mes">0</div>
                </div>
            </div>

            <div class="card">
                <h2>Presupuestos Recientes</h2>
                <table class="tabla" id="tabla-presupuestos">
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Cliente</th>
                            <th>Fecha</th>
                            <th>Items</th>
                            <th style="text-align: right;">Total</th>
                            <th style="text-align: center;">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="6" style="text-align: center; padding: 3rem; color: #64748b;">
                                No hay presupuestos. ¡Crea el primero!
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Vista Nuevo Presupuesto -->
        <div id="nuevo-view" class="hidden">
            <div class="header">
                <div>
                    <button class="btn btn-secondary" onclick="mostrarVista('dashboard')" style="margin-right: 1rem;">
                        ← Volver
                    </button>
                    <h1 style="display: inline;">Nuevo Presupuesto</h1>
                </div>
            </div>

            <div class="grid grid-2">
                <div>
                    <!-- Datos del Cliente -->
                    <div class="card">
                        <h2>Datos del Cliente</h2>
                        <div class="form-group">
                            <label>Nombre del Cliente *</label>
                            <input type="text" id="cliente-nombre" placeholder="Nombre completo">
                        </div>
                        <div class="grid grid-2">
                            <div class="form-group">
                                <label>Teléfono</label>
                                <input type="tel" id="cliente-telefono" placeholder="+34 600 000 000">
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" id="cliente-email" placeholder="cliente@email.com">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Dirección</label>
                            <input type="text" id="cliente-direccion" placeholder="Calle, número, ciudad">
                        </div>
                    </div>

                    <!-- Calculadora -->
                    <div class="card">
                        <h2>🧮 Calculadora de Cortinas</h2>
                        <div class="form-group">
                            <label>Tipo de Cortina *</label>
                            <select id="tipo-cortina">
                                <option value="">Selecciona el tipo...</option>
                                <option value="estor_paquetto">Estor Paquetto (sin varillas)</option>
                                <option value="estor_plegable">Estor Plegable (con varillas)</option>
                                <option value="cortina_onda_perfecta">Cortina Onda Perfecta</option>
                                <option value="cortina_fruncida">Cortina Fruncida</option>
                                <option value="cortina_plana">Cortina Plana sin Frunce</option>
                                <option value="cortina_ollados">Cortina con Ollados</option>
                                <option value="cortina_triple_pliegue">Cortina Triple Pliegue</option>
                                <option value="cortina_palas">Cortina Palas</option>
                            </select>
                        </div>
                        <div class="grid grid-2">
                            <div class="form-group">
                                <label>Ancho (cm) *</label>
                                <input type="number" id="ancho" placeholder="200">
                            </div>
                            <div class="form-group">
                                <label>Alto (cm) *</label>
                                <input type="number" id="alto" placeholder="280">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Tejido *</label>
                            <select id="tejido">
                                <option value="">Selecciona el tejido...</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Sistema de Instalación</label>
                            <select id="sistema">
                                <option value="">Opcional - Selecciona el sistema...</option>
                            </select>
                        </div>
                        <button class="btn btn-primary" onclick="agregarItem()" style="width: 100%;">
                            ➕ Calcular y Agregar al Presupuesto
                        </button>
                    </div>

                    <!-- Items agregados -->
                    <div class="card" id="items-card" style="display: none;">
                        <h2>Items del Presupuesto</h2>
                        <div class="item-list" id="items-list"></div>
                    </div>

                    <!-- Notas -->
                    <div class="card">
                        <h2>Notas Adicionales</h2>
                        <div class="form-group">
                            <textarea id="notas" rows="4" placeholder="Añade cualquier información adicional..."></textarea>
                        </div>
                    </div>
                </div>

                <!-- Resumen -->
                <div>
                    <div class="resumen">
                        <h3>📦 Resumen del Presupuesto</h3>
                        <div class="resumen-linea">
                            <span>Total Items:</span>
                            <span id="total-items">0</span>
                        </div>
                        <div class="resumen-linea">
                            <span>Subtotal (sin IVA):</span>
                            <span id="subtotal">0.00€</span>
                        </div>
                        <div class="resumen-linea">
                            <span>IVA (21%):</span>
                            <span id="iva">0.00€</span>
                        </div>
                        <div class="resumen-total">
                            <div style="display: flex; justify-content: space-between;">
                                <span>TOTAL:</span>
                                <span id="total">0.00€</span>
                            </div>
                        </div>
                        <button class="btn" onclick="guardarPresupuesto()" style="width: 100%; background: white; color: #2563eb; margin-top: 2rem; font-weight: bold;">
                            💾 Guardar Presupuesto
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Vista Detalle Presupuesto -->
        <div id="detalle-view" class="hidden">
            <div class="header hidden-print">
                <div>
                    <button class="btn btn-secondary" onclick="mostrarVista('dashboard')" style="margin-right: 1rem;">
                        ← Volver
                    </button>
                    <h1 style="display: inline;">Detalle del Presupuesto</h1>
                </div>
                <button class="btn btn-primary" onclick="window.print()">
                    🖨️ Imprimir
                </button>
            </div>

            <div class="card" id="detalle-content">
                <!-- Se llenará dinámicamente -->
            </div>
        </div>
    </div>

    <script>
        // Datos de tarifas
        const TEJIDOS = [
            { nombre: "AALBORG 110-111-114", precio: 41.28, ancho: 300, composicion: "50% Pes 50% Li" },
            { nombre: "AALBORG 60-61-64", precio: 41.28, ancho: 300, composicion: "53% Pes 47% Li" },
            { nombre: "AALBORG 90-91-94", precio: 41.28, ancho: 300, composicion: "57% Pes 43% Li" },
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

        const TIPOS_NOMBRE = {
            "estor_paquetto": "Estor Paquetto",
            "estor_plegable": "Estor Plegable",
            "cortina_onda_perfecta": "Cortina Onda Perfecta",
            "cortina_fruncida": "Cortina Fruncida",
            "cortina_plana": "Cortina Plana",
            "cortina_ollados": "Cortina con Ollados",
            "cortina_triple_pliegue": "Cortina Triple Pliegue",
            "cortina_palas": "Cortina Palas"
        };

        // Estado de la aplicación
        let itemsActuales = [];
        let presupuestoActual = null;

        // Inicializar
        document.addEventListener('DOMContentLoaded', function() {
            cargarTejidos();
            cargarSistemas();
            cargarDashboard();
        });

        function cargarTejidos() {
            const select = document.getElementById('tejido');
            TEJIDOS.forEach(t => {
                const option = document.createElement('option');
                option.value = t.nombre;
                option.textContent = `${t.nombre} - ${t.precio}€/ml (${t.composicion})`;
                select.appendChild(option);
            });
        }

        function cargarSistemas() {
            const select = document.getElementById('sistema');
            SISTEMAS.forEach(s => {
                const option = document.createElement('option');
                option.value = s.nombre;
                option.textContent = s.nombre;
                select.appendChild(option);
            });
        }

        function mostrarVista(vista) {
            document.getElementById('dashboard-view').classList.add('hidden');
            document.getElementById('nuevo-view').classList.add('hidden');
            document.getElementById('detalle-view').classList.add('hidden');
            
            if (vista === 'dashboard') {
                document.getElementById('dashboard-view').classList.remove('hidden');
                cargarDashboard();
            } else if (vista === 'nuevo') {
                document.getElementById('nuevo-view').classList.remove('hidden');
                limpiarFormulario();
            } else if (vista === 'detalle') {
                document.getElementById('detalle-view').classList.remove('hidden');
            }
        }

        function agregarItem() {
            const tipo = document.getElementById('tipo-cortina').value;
            const ancho = parseFloat(document.getElementById('ancho').value);
            const alto = parseFloat(document.getElementById('alto').value);
            const tejidoNombre = document.getElementById('tejido').value;
            const sistemaNombre = document.getElementById('sistema').value;

            if (!tipo || !ancho || !alto || !tejidoNombre) {
                alert('Por favor completa todos los campos obligatorios (Tipo, Ancho, Alto y Tejido)');
                return;
            }

            const tejido = TEJIDOS.find(t => t.nombre === tejidoNombre);
            
            // Calcular metros de tejido
            let multiplicador = 1;
            let tejidoMetros = 0;
            
            if (tipo === 'estor_paquetto' || tipo === 'estor_plegable') {
                tejidoMetros = (ancho + 40) / 100;
            } else if (tipo === 'cortina_onda_perfecta' ) {
                multiplicador = 2.4;
                tejidoMetros = (ancho * multiplicador) / 100;
            } else if (tipo === 'cortina_ollados') {
                multiplicador = 2.2;
                tejidoMetros = (ancho * multiplicador) / 100;
            } else if (tipo === 'cortina_plana') {
                tejidoMetros = (ancho * 1.4) / 100;
            }
            else if ( tipo === 'cortina_fruncida' ) {
                multiplicador = 2.5;
                tejidoMetros = (ancho * multiplicador) / 100;
            }
            else if ( tipo === 'cortina_triple_pliegue') {
                multiplicador = 2.7;
                tejidoMetros = (ancho * multiplicador) / 100;
            }
             else if ( tipo === 'cortina_palas' ) {
                multiplicador = 2.6;
                tejidoMetros = (ancho * multiplicador) / 100;
            }

            const precioTejido = tejidoMetros * tejido.precio;

            // Precio confección
            const confeccion = CONFECCION[tipo];
            let precioConfeccion = 0;
            if (ancho <= 100) precioConfeccion = confeccion[100];
            else if (ancho <= 150) precioConfeccion = confeccion[150];
            else if (ancho <= 200) precioConfeccion = confeccion[200];
            else if (ancho <= 250) precioConfeccion = confeccion[250];
            else if (ancho <= 300) precioConfeccion = confeccion[300];
            else precioConfeccion = confeccion[350] || confeccion[300];

            // Precio sistema
            let precioSistema = 0;
            if (sistemaNombre) {
                const sistema = SISTEMAS.find(s => s.nombre === sistemaNombre);
                if (sistema) {
                    if (ancho <= 100) precioSistema = sistema.precios[100] || 0;
                    else if (ancho <= 150) precioSistema = sistema.precios[150] || 0;
                    else if (ancho <= 200) precioSistema = sistema.precios[200] || 0;
                    else if (ancho <= 250) precioSistema = sistema.precios[250] || 0;
                    else precioSistema = sistema.precios[300] || 0;
                }
            }

            const precioTotal = precioTejido + precioConfeccion + precioSistema;

            const item = {
                id: Date.now(),
                tipo,
                descripcion: `${TIPOS_NOMBRE[tipo]} - ${tejidoNombre}`,
                ancho,
                alto,
                tejido_nombre: tejidoNombre,
                precio_total: precioTotal
            };

            itemsActuales.push(item);
            actualizarItems();
            actualizarResumen();

            // Limpiar campos
            document.getElementById('tipo-cortina').value = '';
            document.getElementById('ancho').value = '';
            document.getElementById('alto').value = '';
            document.getElementById('tejido').value = '';
            document.getElementById('sistema').value = '';
        }

        function eliminarItem(id) {
            itemsActuales = itemsActuales.filter(item => item.id !== id);
            actualizarItems();
            actualizarResumen();
        }

        function actualizarItems() {
            const lista = document.getElementById('items-list');
            const card = document.getElementById('items-card');
            
            if (itemsActuales.length === 0) {
                card.style.display = 'none';
                return;
            }
            
            card.style.display = 'block';
            lista.innerHTML = '';
            
            itemsActuales.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'item';
                div.innerHTML = `
                    <div class="item-info">
                        <h4>#${index + 1} - ${item.descripcion}</h4>
                        <p>Medidas: ${item.ancho}cm x ${item.alto}cm</p>
                    </div>
                    <div class="item-price">${item.precio_total.toFixed(2)}€</div>
                    <button class="btn btn-danger" onclick="eliminarItem(${item.id})">🗑️</button>
                `;
                lista.appendChild(div);
            });
        }

        function actualizarResumen() {
            const totalItems = itemsActuales.length;
            const subtotal = itemsActuales.reduce((sum, item) => sum + item.precio_total, 0);
            const iva = subtotal * 0.21;
            const total = subtotal + iva;

            document.getElementById('total-items').textContent = totalItems;
            document.getElementById('subtotal').textContent = subtotal.toFixed(2) + '€';
            document.getElementById('iva').textContent = iva.toFixed(2) + '€';
            document.getElementById('total').textContent = total.toFixed(2) + '€';
        }

        function guardarPresupuesto() {
            const nombre = document.getElementById('cliente-nombre').value;
            
            if (!nombre) {
                alert('Por favor ingresa el nombre del cliente');
                return;
            }

            if (itemsActuales.length === 0) {
                alert('Agrega al menos un item al presupuesto');
                return;
            }

            const subtotal = itemsActuales.reduce((sum, item) => sum + item.precio_total, 0);
            const total = subtotal * 1.21;

            const presupuesto = {
                id: Date.now().toString(),
                numero: 'P-' + Date.now(),
                cliente_nombre: nombre,
                cliente_telefono: document.getElementById('cliente-telefono').value,
                cliente_email: document.getElementById('cliente-email').value,
                cliente_direccion: document.getElementById('cliente-direccion').value,
                fecha: new Date().toISOString().split('T')[0],
                items: itemsActuales,
                total_sin_iva: subtotal,
                total_con_iva: total,
                estado: 'borrador',
                notas: document.getElementById('notas').value
            };

            // Guardar en localStorage
            let presupuestos = JSON.parse(localStorage.getItem('presupuestos') || '[]');
            presupuestos.push(presupuesto);
            localStorage.setItem('presupuestos', JSON.stringify(presupuestos));

            alert('✅ Presupuesto guardado correctamente');
            mostrarVista('dashboard');
        }

        function cargarDashboard() {
            const presupuestos = JSON.parse(localStorage.getItem('presupuestos') || '[]');
            
            // Estadísticas
            document.getElementById('total-presupuestos').textContent = presupuestos.length;
            const totalImporte = presupuestos.reduce((sum, p) => sum + p.total_con_iva, 0);
            document.getElementById('total-importe').textContent = totalImporte.toFixed(0) + '€';
            
            const esteMes = presupuestos.filter(p => {
                const fecha = new Date(p.fecha);
                const ahora = new Date();
                return fecha.getMonth() === ahora.getMonth() && fecha.getFullYear() === ahora.getFullYear();
            }).length;
            document.getElementById('total-mes').textContent = esteMes;

            // Tabla
            const tbody = document.querySelector('#tabla-presupuestos tbody');
            tbody.innerHTML = '';
            
            if (presupuestos.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="6" style="text-align: center; padding: 3rem; color: #64748b;">
                            No hay presupuestos. ¡Crea el primero!
                        </td>
                    </tr>
                `;
                return;
            }

            presupuestos.reverse().forEach(p => {
                const tr = document.createElement('tr');
                tr.onclick = () => verDetalle(p.id);
                tr.innerHTML = `
                    <td>${p.numero}</td>
                    <td>${p.cliente_nombre}</td>
                    <td>${new Date(p.fecha).toLocaleDateString('es-ES')}</td>
                    <td>${p.items.length}</td>
                    <td style="text-align: right; font-weight: bold;">${p.total_con_iva.toFixed(2)}€</td>
                    <td style="text-align: center;">
                        <span class="badge badge-${p.estado}">${p.estado}</span>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        function verDetalle(id) {
            const presupuestos = JSON.parse(localStorage.getItem('presupuestos') || '[]');
            const presupuesto = presupuestos.find(p => p.id === id);
            
            if (!presupuesto) return;

            const content = document.getElementById('detalle-content');
            content.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 2px solid #e2e8f0;">
                    <div>
                        <h2 style="color: #2563eb; margin-bottom: 0.5rem;">Canotex</h2>
                        <p style="color: #64748b; font-size: 0.875rem;">Tel: 973235776</p>
                        <p style="color: #64748b; font-size: 0.875rem;">info@canotex.es</p>
                    </div>
                    <div style="text-align: right;">
                        <h2 style="color: #2563eb; margin-bottom: 0.5rem;">PRESUPUESTO</h2>
                        <p style="color: #64748b;">Nº: ${presupuesto.numero}</p>
                        <p style="color: #64748b;">Fecha: ${new Date(presupuesto.fecha).toLocaleDateString('es-ES')}</p>
                    </div>
                </div>

                <div style="background: #f8fafc; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem;">Cliente</h3>
                    <p style="font-weight: bold; margin-bottom: 0.5rem;">${presupuesto.cliente_nombre}</p>
                    ${presupuesto.cliente_telefono ? `<p style="color: #64748b; font-size: 0.875rem;">Tel: ${presupuesto.cliente_telefono}</p>` : ''}
                    ${presupuesto.cliente_email ? `<p style="color: #64748b; font-size: 0.875rem;">Email: ${presupuesto.cliente_email}</p>` : ''}
                    ${presupuesto.cliente_direccion ? `<p style="color: #64748b; font-size: 0.875rem;">${presupuesto.cliente_direccion}</p>` : ''}
                </div>

                <h3 style="margin-bottom: 1rem;">Detalle del Presupuesto</h3>
                <table class="tabla">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Descripción</th>
                            <th>Medidas</th>
                            <th style="text-align: right;">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${presupuesto.items.map((item, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>
                                    <strong>${item.descripcion}</strong><br>
                                    <small style="color: #64748b;">Tejido: ${item.tejido_nombre}</small>
                                </td>
                                <td>${item.ancho} x ${item.alto} cm</td>
                                <td style="text-align: right; font-weight: bold;">${item.precio_total.toFixed(2)}€</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>

                <div style="display: flex; justify-content: flex-end; margin-top: 2rem;">
                    <div style="width: 400px;">
                        <div style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid #e2e8f0;">
                            <span>Subtotal (sin IVA):</span>
                            <strong>${presupuesto.total_sin_iva.toFixed(2)}€</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid #e2e8f0;">
                            <span>IVA (21%):</span>
                            <strong>${(presupuesto.total_sin_iva * 0.21).toFixed(2)}€</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 1.5rem 0; background: #dbeafe; margin: 1rem -1rem 0; padding-left: 1rem; padding-right: 1rem; border-radius: 8px;">
                            <span style="font-size: 1.25rem; font-weight: bold;">TOTAL:</span>
                            <span style="font-size: 1.5rem; font-weight: bold; color: #2563eb;">${presupuesto.total_con_iva.toFixed(2)}€</span>
                        </div>
                    </div>
                </div>

                ${presupuesto.notas ? `
                    <div style="margin-top: 2rem; padding: 1rem; background: #fef3c7; border: 1px solid #fcd34d; border-radius: 8px;">
                        <h4 style="margin-bottom: 0.5rem;">Notas:</h4>
                        <p style="color: #78716c;">${presupuesto.notas}</p>
                    </div>
                ` : ''}

                <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 0.75rem;">
                    <p>Presupuesto válido por 30 días.</p>
                    <p>Canotex Textil S.L. - C/ Penedés, 87 - 25005 Lleida</p>
                </div>
            `;

            mostrarVista('detalle');
        }

        function limpiarFormulario() {
            document.getElementById('cliente-nombre').value = '';
            document.getElementById('cliente-telefono').value = '';
            document.getElementById('cliente-email').value = '';
            document.getElementById('cliente-direccion').value = '';
            document.getElementById('notas').value = '';
            itemsActuales = [];
            actualizarItems();
            actualizarResumen();
        }
    </script>
</body>
</html>
