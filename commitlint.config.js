module.exports = {
  rules: {
    "body-leading-blank": [2, "always"],
    // Erro: Assunto é obrigatório
    "subject-empty": [2, "never"],
    // Erro: Máximo 160 caracteres no assunto
    "subject-max-length": [2, "always", 160],
    // Warn: Não precisa de ponto final no assunto
    "subject-full-stop": [1, "never", "."],
    // Erro: Tipo é obrigatório
    "type-empty": [2, "never"],
    // Warn: Tipo de commit apenas lower-case ou upper-case
    "type-case": [2, "always", "lower-case"],
    // Erro: Obrigatório inserir um dos tipos abaixo
    "type-enum": [2, "always", ["feat", "fix", "text", "cicd", "etc"]],
  },
}
