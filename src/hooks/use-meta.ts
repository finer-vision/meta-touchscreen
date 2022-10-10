import React from "react";

export default function useMeta() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const reset = () => {
    setIsMenuOpen(false);
  };

  return {
    isMenuOpen,
    setIsMenuOpen,
    reset,
  };
}
