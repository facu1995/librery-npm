# Toast Component

El componente `Toast` es una notificación visual para mostrar mensajes breves al usuario.

## Propiedades

### `ToastProps`

- `type?: 'success' | 'error' | 'test'`: Define el tipo de mensaje y el icono asociado.
- `text: string`: Texto principal del toast.
- `buttonText?: string`: Texto opcional para un botón acompañante.
- `onButtonClick?: () => void`: Función que se ejecuta al hacer clic en el botón.
- `styles?: CSSProperties`: Estilos adicionales para personalizar el toast.
- `portalRef?: HTMLElement | null`: Referencia al contenedor padre donde se renderiza el toast (opcional).
- `iconStyles?: CSSProperties`: Estilos aplicados al icono según el tipo seleccionado.
- `color?: string`: Color de fondo personalizado para el toast.

## Uso

```jsx
import React from 'react';
import Toast, { ToastProps } from './Toast';

const Example = () => {
  return (
    <div>
      <Toast
        type="success"
        text="¡Operación exitosa!"
        buttonText="Cerrar"
        onButtonClick={() => console.log('Toast cerrado')}
        color="#4CAF50"
      />
    </div>
  );
};

export default Example;
