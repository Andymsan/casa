# Nuestra casa

Página para que Andrea y Rafa planeen su depa (búsqueda febrero–mayo 2027): mapa de trabajos, calculadora de gastos proporcional, depas candidatos con votos y comentarios, y una lista de cosas por decidir.

- Entra con una cuenta de Firebase (proyecto de Mi dinero). Solo dos correos tienen permiso.
- Los datos viven en Firestore bajo `casa/...` y se sincronizan entre los dos en tiempo real.
- Los ingresos **no** están en este código: se escriben en la página y se guardan en Firestore.

## Reglas de Firestore

Dentro de `match /databases/{database}/documents { ... }`:

```
match /casa/{doc=**} {
  allow read, write: if request.auth != null
    && request.auth.token.email in ['CORREO_DE_ANDREA', 'CORREO_DE_RAFA'];
}
```
