import CardPost from "./PostCard";

import image1 from "../../assets/blogPost1/1.png";
import image2 from "../../assets/blogPost1/2.png";
import image3 from "../../assets/blogPost1/3.png";
import image4 from "../../assets/blogPost1/4.png";
import image5 from "../../assets/blogPost1/5.png";
import image6 from "../../assets/blogPost1/6.png";

const Imagens = [image1, image2, image3, image4, image5, image6];

export function Blog() {
  return (
    <main className="flex items-center justify-center py-24 w-auto px-4 ">
      <div className="space-y-8 ">
        <CardPost
          title={"Como Se Protejer de Ataques Hackers"}
          description={
            <p>
              Eai pessoal, blz? Recentemente tive algumas contas de
              aplicativos,inclusive, o instagram hackeados. Queria passar
              algumas dicas para você se prevenir de ser alvo de certos ataques
              de hackers e navegar com segurança...
              <br></br>
              <b>1- Utilize senhas fortes!</b> Crie senhas fortes com vários
              caracteres mistos, como, letras maiúsculas, minúsculas, números e
              símbolos, mais ou menos assim:{" "}
              <spam className="bg-blue-100 px-2 rounded-md">
                lOH81tHs3hXqNth
              </spam>{" "}
              . Para memorizar utilize um gerenciador de senhas que é a maneira
              mais segura de armazenar suas senhas para cada aplicativo,
              recomendo o{" "}
              <a
                className="text-blue-500 hover:text-blue-700 underline"
                href="https://www.dashlane.com/pt-br"
                target="_blank"
                rel="noopener noreferrer"
              >
                DASHLANE.
              </a>
              <br></br>
              <b>2-Não use a mesma senha pra tudo! </b>
              Quando você usa a mesma senha para tudo, pode acabar comprometendo
              todas as contas, caso alguma for hackeada.
              <br></br>
              <b>3-Utilize um gerenciador de senhas! </b> Mantenha suas senhas
              seguras com um gerenciador de senhas confiável. Ao utilizá-lo, com
              apenas uma senha mestre você terá acesso a todas suas senhas de
              maneira criptografada. Recomendo o Dashlane ou bitwarden, porém
              existem vários no mercado.
              <br></br>
              <b>4-Use autenticação de Fatores (2FA)! </b>
              Ao ativar o 2FA, você adiciona uma camada extra de proteção. Ela
              requer não apenas uma senha, mas também uma segunda forma de
              validação, como exemplo, um código temporário gerado por um
              aplicativo de autenticação. Não recomendo usar autenticação via
              SMS, caso um criminoso clone seu chip ou seu aparelho seja
              roubado, ele poderá usá-lo para autenticar`
            </p>
          }
          image={Imagens}
        />
        
      </div>
    </main>
  );
}
