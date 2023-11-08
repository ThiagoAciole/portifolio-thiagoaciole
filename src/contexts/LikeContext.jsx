import  { createContext, useContext, useState, useEffect } from "react";

const LikeContext = createContext();

export function LikeProvider({ children }) {
  const [likeCount, setLikeCount] = useState(0);

  // Recupera a quantidade de likes do armazenamento local ao inicializar
  useEffect(() => {
    const storedLikeCount = localStorage.getItem("likeCount");
    if (storedLikeCount) {
      setLikeCount(parseInt(storedLikeCount, 10));
    }
  }, []);

  // Função para incrementar a quantidade de likes e atualizar o armazenamento local
  const incrementLike = () => {
    setLikeCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("likeCount", newCount.toString()); // Salva no localStorage
      return newCount;
    });
  };

  // Função para decrementar a quantidade de likes e atualizar o armazenamento local
  const decrementLike = () => {
    setLikeCount((prevCount) => {
      const newCount = prevCount - 1;
      localStorage.setItem("likeCount", newCount.toString()); // Salva no localStorage
      return newCount;
    });
  };

  return (
    <LikeContext.Provider value={{ likeCount, incrementLike, decrementLike }}>
      {children}
    </LikeContext.Provider>
  );
}

export function useLike() {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error("useLike deve ser usado dentro de um LikeProvider");
  }
  return context;
}
