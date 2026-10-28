import { readFile } from "node:fs/promises";
import path from "node:path";
import KirscheApp from "./kirsche-app";

export default async function Home() {
  const source = await readFile(path.join(process.cwd(), "kirsche.html"), "utf8");
  const body = source.match(
    /<body\b[^>]*>([\s\S]*?)<script\b[^>]*>([\s\S]*?)<\/script>\s*<\/body>/i,
  );
  const styles = source.match(/<style\b[^>]*>([\s\S]*?)<\/style>/i);

  if (!body || !styles) {
    throw new Error("Não foi possível carregar o conteúdo original de kirsche.html.");
  }

  return (
    <KirscheApp
      markup={body[1]}
      runtimeScript={body[2]}
      styles={styles[1]}
    />
  );
}
