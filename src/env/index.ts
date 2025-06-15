import "dotenv/config";
import { z } from "zod";

const schemaEnv = z.object({
  NODE_ENV: z.string().default("PRODUCTION"),
  PORT: z.coerce.number().default(3333),
});

const _env = schemaEnv.safeParse(process.env);

if (!_env.success) throw new Error("Erro na variaveis de ambiente");

const env = _env.data;

export default env;
