const colection = {
    "Colecciones": {
      "Usuarios": {
        "_id": "ObjectId",
        "nombre": "String",
        "correo": "String",
        "contrasena": "String (hashed)",
        "telefono": "String",
        "direcciones": [
          {
            "tipo": "String",
            "calle": "String",
            "ciudad": "String",
            "estado": "String",
            "codigoPostal": "String"
          }
        ]
        // Otros campos de usuario
      },
      "Productos": {
        "_id": "ObjectId",
        "nombre": "String",
        "tipo": "String",
        "personalizable": "Boolean",
        "precio": "Number",
        "imagenes": ["String"]
        // Otros campos de producto
      },
      "Combos": {
        "_id": "ObjectId",
        "nombre": "String",
        "productosIncluidos": [
          {
            "productoId": "ObjectId",
            "cantidad": "Number"
          }
        ],
        "precio": "Number",
        "imagenes": ["String"]
        // Otros campos de combo
      },
      "Carritos": {
        "_id": "ObjectId",
        "usuarioId": "ObjectId",
        "productos": [
          {
            "tipo": "String",
            "elementoId": "ObjectId",
            "cantidad": "Number",
            "personalizacion": {
              "mensaje": "String",
              "imagenes": ["String"]
            }
          }
        ]
        // Otros campos de carrito
      },
      "Pagos": {
        "_id": "ObjectId",
        "usuarioId": "ObjectId",
        "carritoId": "ObjectId",
        "monto": "Number",
        "fecha": "String (Fecha)"
        // Otros campos de pago
      },
      "Entregas": {
        "_id": "ObjectId",
        "usuarioId": "ObjectId",
        "carritoId": "ObjectId",
        "direccion": {
          "tipo": "String",
          "calle": "String",
          "ciudad": "String",
          "estado": "String",
          "codigoPostal": "String"
        },
        "telefono": "String",
        "fechaAgendada": "String (Fecha)",
        "horaAgendada": "String",
        "estado": "String"
        // Otros campos de entrega
      }
    }
  }