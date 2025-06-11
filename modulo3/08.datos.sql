INSERT INTO ventas.clientes (nombre, email, telefono, fecha_registro) VALUES
('María González', 'maria.gonzalez@email.com', '555-1234', '2023-01-15'),
('Carlos Mendoza', 'carlos.mendoza@email.com', '555-5678', '2023-02-20'),
('Ana López', 'ana.lopez@email.com', '555-8765', '2023-03-10'),
('Pedro Ramírez', 'pedro.ramirez@email.com', '555-4321', '2023-04-05'),
('Luisa Fernández', 'luisa.fernandez@email.com', '555-9876', '2023-05-12');

INSERT INTO ventas.productos (nombre, precio, stock) VALUES
('Laptop HP Pavilion', 18500.00, 15),
('Smartphone Samsung Galaxy S23', 12499.00, 30),
('Teclado Mecánico RGB', 899.00, 50),
('Monitor LG 24" Full HD', 3499.00, 20),
('Mouse Inalámbrico Logitech', 599.00, 45);

INSERT INTO ventas.pedidos (cliente_id, fecha_pedido, estado, total) VALUES
(1, '2023-06-01 10:30:00', 'completado', 18500.00),
(2, '2023-06-02 14:15:00', 'pendiente', 13498.00),
(3, '2023-06-03 09:45:00', 'completado', 899.00),
(4, '2023-06-04 16:20:00', 'cancelado', 3499.00),
(5, '2023-06-05 11:10:00', 'completado', 599.00);
INSERT INTO ventas.pedidos VALUES (4, 2, 'completado', 3500);

INSERT INTO ventas.detalles_pedido (pedido_id, producto_id, cantidad, precio_unitario) VALUES
(1, 1, 1, 18500.00),
(2, 2, 1, 12499.00),
(2, 5, 1, 599.00),
(3, 3, 1, 899.00),
(4, 4, 1, 3499.00),
(5, 5, 1, 599.00);

INSERT INTO ventas.direcciones (cliente_id, calle, ciudad, pais) VALUES
(1, 'Av. Revolución 123', 'Ciudad de México', 'México'),
(2, 'Calle Morelos 456', 'Guadalajara', 'México'),
(3, 'Boulevard López Mateos 789', 'Monterrey', 'México'),
(4, 'Paseo de la Reforma 1011', 'Ciudad de México', 'México'),
(5, 'Av. Colón 1213', 'Puebla', 'México');

