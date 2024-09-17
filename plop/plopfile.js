module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a component, with styles, tests and a story',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What is this component's name?",
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{name}}.module.css',
        templateFile: 'templates/CSSmodule.css.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/Test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/stories/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/Story.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/stories/components/{{pascalCase name}}/{{pascalCase name}}.stories.mdx',
        templateFile: 'templates/Overview.mdx.hbs',
      },
      {
        path: '../src/components/index.tsx',
        pattern: /(\/\/ COMPONENT IMPORTS)/g,
        template:
          "export { default as {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}';\n$1",
        type: 'modify',
      },
    ],
  });
};
