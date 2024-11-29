'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type VisibilityContextType = {
  visibility: Record<string, boolean>;
  toggleVisibility: (id: string) => void;
};

export const VisibilityContext = createContext<
  VisibilityContextType | undefined
>(undefined);

// Recuperar la visibilidad inicial desde localStorage
const getInitialVisibility = (): Record<string, boolean> => {
  const storedVisibility =
    localStorage && localStorage.getItem('devVisibility');
  return storedVisibility ? JSON.parse(storedVisibility) : {};
};

// Guardar la visibilidad en localStorage
const saveVisibility = (visibility: Record<string, boolean>) => {
  localStorage.setItem('devVisibility', JSON.stringify(visibility));
};

// Limpiar entradas viejas de localStorage para componentes que no están más activos
const cleanOldVisibilityEntries = (visibility: Record<string, boolean>) => {
  const storedVisibility = localStorage.getItem('devVisibility');
  if (storedVisibility) {
    // Aseguramos que 'storedVisibility' sea del tipo 'Record<string, boolean>'
    const parsedVisibility = JSON.parse(storedVisibility) as Record<
      string,
      boolean
    >;

    // Solo conservamos las claves que están en el estado actual
    const cleanedVisibility = Object.fromEntries(
      Object.entries(parsedVisibility).filter(([key]) => key in visibility)
    );

    // Guardar la lista de visibilidad actualizada
    saveVisibility(cleanedVisibility);
  }
};

export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [visibility, setVisibility] =
    useState<Record<string, boolean>>(getInitialVisibility);

  // Función para alternar la visibilidad de un componente
  const toggleVisibility = (id: string) => {
    setVisibility((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      saveVisibility(updated); // Guardar el estado actualizado
      cleanOldVisibilityEntries(updated); // Limpiar entradas obsoletas de localStorage
      return updated;
    });
  };

  return (
    <VisibilityContext.Provider value={{ visibility, toggleVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};
export const useVisibility = (
  id: string
): { isVisible: boolean; toggle: () => void } => {
  const context = useContext(VisibilityContext);
  if (!context) {
    throw new Error(
      'useVisibility debe ser usado dentro de VisibilityProvider'
    );
  }

  const { visibility, toggleVisibility } = context;

  // Aseguramos que el componente tenga un valor inicial en el contexto
  useEffect(() => {
    if (!(id in visibility)) {
      toggleVisibility(id); // Inicializa como visible si no existe
    }
  }, [id, visibility, toggleVisibility]);

  return {
    isVisible: visibility[id] ?? true,
    toggle: () => toggleVisibility(id),
  };
};
