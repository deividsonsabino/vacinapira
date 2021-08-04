module.exports = {
  types: [
    { value: "feat", name: "feat:     Nova feature" },
    { value: "fix", name: "fix:      Bug fix" },
    { value: "test", name: "test:     Adicionar ou alterar testes" },
    {
      value: "cicd",
      name: "cicd:     Alterações em CI/CD e ferramentes auxiliares",
    },
    {
      value: "etc",
      name: "etc:      Mudanças que não afetam o código\n            (documentação, formatação, comentário, etc)",
    },
  ],
  // override the messages, defaults are as follows
  messages: {
    type: "Selecione o tipo de mudança que você está commitando:",
    subject: "Escreva uma descrição CURTA sobre a(s) mudança(s):\n",
    body: 'Descreva detalhadamente a(s) mudanças desse commit (opcional). Use "\\n" para pular linha:\n',
    confirmCommit: "Deseja prosseguir com o commit acima?",
  },

  // limit subject length
  subjectLimit: 160,
  skipQuestions: ["scope", "footer"],
  breaklineChar: "\n",
}
