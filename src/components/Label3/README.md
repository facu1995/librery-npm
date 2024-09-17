# `@infosis/label`

`@infosis/label` es un componente de React reutilizable para mostrar etiquetas con múltiples opciones de estilo. 

## Instalación

Para usar `MyLabel` en tu proyecto, primero instala el paquete desde tu registro npm privado:

```bash
npm install @infosis/label

import React from 'react';
import { MyLabel } from '@infosis/label';

const App = () => (
  <div>
    <MyLabel
      label="Important Label"
      size="h2"
      allCaps
      color="#ff5733"
      backgroundColor="rgba(0, 0, 0, 0.1)"
      weight="bold"
      isImportant
    >
      <span>Additional content</span>
    </MyLabel>
  </div>
);

export default App;

