module.exports = {
  globals: {
      "$": true
  },
  env: {
      "es6": true,
      "browser": true,
      "jquery": true,
      "commonjs": true
  },
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
  },
  extends: [
      "plugin:vue/recommended"
  ],
  rules: {
      // Disallow or enforce spaces inside of brackets
      // https://eslint.org/docs/rules/array-bracket-spacing
      'array-bracket-spacing': 1,

      // Require braces in arrow function body
      // https://eslint.org/docs/rules/arrow-body-style
      'arrow-body-style': [1, 'as-needed'],

      // Require parens in arrow function arguments
      // https://eslint.org/docs/rules/arrow-parens
      'arrow-parens': [2, 'as-needed', {
          'requireForBlockBody': true
      }],

      // Require space before/after arrow functionâ€™s arrow
      // https://eslint.org/docs/rules/arrow-spacing
      'arrow-spacing': 2,

      // Require Brace Style
      // https://eslint.org/docs/rules/brace-style
      'brace-style': 1,

      // Require Following Curly Brace Conventions
      // https://eslint.org/docs/rules/curly
      'curly': [2, 'all'],

      // require or disallow trailing commas
      // https://eslint.org/docs/rules/comma-dangle
      'comma-dangle': 1,

      // Enforces spacing around commas
      // https://eslint.org/docs/rules/comma-spacing
      'comma-spacing': 1,

      // Comma style
      // https://eslint.org/docs/rules/comma-style
      'comma-style': 2,

      // Require Consistent This
      // https://eslint.org/docs/rules/consistent-this
      'consistent-this': [2, 'self'],

      // require super() calls in constructors
      // https://eslint.org/docs/rules/constructor-super
      'constructor-super': 1,

      // Require or disallow newline at the end of files
      // https://eslint.org/docs/rules/eol-last
      'eol-last': 1,

      // Require function names to match the name of the variable or property to which they are assigned
      // https://eslint.org/docs/rules/func-name-matching
      'func-name-matching': 2,

      // Enforce consistent indentation
      // https://eslint.org/docs/rules/indent
      'indent': [2, 4],

      // Enforce the location of arrow function bodies with implicit returns
      // https://eslint.org/docs/rules/implicit-arrow-linebreak
      'implicit-arrow-linebreak': [2, 'beside'],

      // Enforce consistent spacing between keys and values in object literal properties
      // https://eslint.org/docs/rules/key-spacing
      'key-spacing': 2,

      // Require or disallow an empty line between class members
      // https://eslint.org/docs/rules/lines-between-class-members
      'lines-between-class-members': [1, 'always', {
          'exceptAfterSingleLine': true
      }],

      // Require constructor names to begin with a capital letter
      // https://eslint.org/docs/rules/new-cap
      'new-cap': 2,

      // Require parentheses when invoking a constructor with no arguments
      // https://eslint.org/docs/rules/new-parens
      'new-parens': 2,

      // Disallow Use of Alert
      // https://eslint.org/docs/rules/no-alert
      'no-alert': 2,

      // Disallow bitwise operators
      // https://eslint.org/docs/rules/no-bitwise
      'no-bitwise': 2,

      // disallow lexical declarations in case clauses
      // https://eslint.org/docs/rules/no-case-declarations
      'no-case-declarations': 1,

      // disallow reassigning class members
      // https://eslint.org/docs/rules/no-class-assign
      'no-class-assign': 1,

      // disallow comparing against -0
      // https://eslint.org/docs/rules/no-compare-neg-zero
      'no-compare-neg-zero': 2,

      // disallow the use of console
      // https://eslint.org/docs/rules/no-console
      'no-console': 2,

      // https://eslint.org/docs/rules/no-cond-assign
      // https://eslint.org/docs/rules/no-cond-assign
      'no-cond-assign': 1,

      // Disallow modifying variables that are declared using const
      // https://eslint.org/docs/rules/no-const-assign
      'no-const-assign': 2,

      // disallow constant expressions in conditions
      // https://eslint.org/docs/rules/no-constant-condition
      'no-constant-condition': 1,

      // disallow control characters in regular expressions
      // https://eslint.org/docs/rules/no-control-regex
      'no-control-regex': 1,

      // disallow the use of debugger
      // https://eslint.org/docs/rules/no-debugger
      'no-debugger': 2,

      // disallow deleting variables
      // https://eslint.org/docs/rules/no-delete-var
      'no-delete-var': 2,

      // disallow duplicate arguments in function definitions
      // https://eslint.org/docs/rules/no-dupe-args
      'no-dupe-args': 2,

      // disallow duplicate keys in object literals
      // https://eslint.org/docs/rules/no-dupe-keys
      'no-dupe-keys': 2,

      // Disallow duplicate name in class members
      // https://eslint.org/docs/rules/no-dupe-class-members
      'no-dupe-class-members': 1,

      // disallow duplicate case labels
      // https://eslint.org/docs/rules/no-duplicate-case
      'no-duplicate-case': 2,

      // Disallow duplicate imports
      // https://eslint.org/docs/rules/no-duplicate-imports
      'no-duplicate-imports': 1,

      // Disallow Null Comparisons
      // https://eslint.org/docs/rules/no-eq-null
      'no-eq-null': 2,

      // disallow empty block statements
      // https://eslint.org/docs/rules/no-empty
      'no-empty': 1,

      // disallow empty character classes in regular expressions
      // https://eslint.org/docs/rules/no-empty-character-class
      'no-empty-character-class': 1,

      // disallow empty destructuring patterns
      // https://eslint.org/docs/rules/no-empty-pattern
      'no-empty-pattern': 1,

      // disallow reassigning exceptions in catch clauses
      // https://eslint.org/docs/rules/no-ex-assign
      'no-ex-assign': 1,

      // Disallow unnecessary boolean casts
      // https://eslint.org/docs/rules/no-extra-boolean-cast
      'no-extra-boolean-cast': 0,

      // disallow unnecessary semicolons
      // https://eslint.org/docs/rules/no-extra-semi
      'no-extra-semi': 1,

      // disallow fallthrough of case statements
      // https://eslint.org/docs/rules/no-fallthrough
      'no-fallthrough': 1,

      // disallow reassigning function declarations
      // https://eslint.org/docs/rules/no-func-assign
      'no-func-assign': 1,

      // disallow assignments to native objects or read-only global variables
      // https://eslint.org/docs/rules/no-global-assign
      'no-global-assign': 1,

      // disallow variable or function declarations in nested blocks
      // https://eslint.org/docs/rules/no-inner-declarations
      'no-inner-declarations': 1,

      // disallow invalid regular expression strings in RegExp constructors
      // https://eslint.org/docs/rules/no-invalid-regexp
      'no-invalid-regexp': 1,

      // disallow irregular whitespace outside of strings and comments
      // https://eslint.org/docs/rules/no-irregular-whitespace
      'no-irregular-whitespace': 1,

      // Disallow mixes of different operators
      // https://eslint.org/docs/rules/no-mixed-operators
      'no-mixed-operators': 1,

      // disallow mixed spaces and tabs for indentation
      // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
      'no-mixed-spaces-and-tabs': 2,

      // Disallow Use of Chained Assignment Expressions
      // https://eslint.org/docs/rules/no-multi-assign
      'no-multi-assign': 1,

      // disallow multiple empty lines
      // https://eslint.org/docs/rules/no-multiple-empty-lines
      'no-multiple-empty-lines': 1,

      // disallow Object constructors
      // https://eslint.org/docs/rules/no-new-object
      'no-new-object': 1,

      // disallow new operators with the Symbol object
      // https://eslint.org/docs/rules/no-new-symbol
      'no-new-symbol': 1,

      // disallow calling global object properties as functions
      // https://eslint.org/docs/rules/no-obj-calls
      'no-obj-calls': 1,

      // disallow octal literals
      // https://eslint.org/docs/rules/no-octal
      'no-octal': 1,

      // disallow the unary operators ++ and --
      // https://eslint.org/docs/rules/no-plusplus
      'no-plusplus': 1,

      // disallow variable redeclaration
      // https://eslint.org/docs/rules/no-redeclare
      'no-redeclare': 1,

      // disallow multiple spaces in regular expressions
      // https://eslint.org/docs/rules/no-regex-spaces
      'no-regex-spaces': 1,

      // disallow assignments where both sides are exactly the same
      // https://eslint.org/docs/rules/no-self-assign
      'no-self-assign': 1,

      // disallow sparse arrays
      // https://eslint.org/docs/rules/no-sparse-arrays
      'no-sparse-arrays': 2,

      // disallow trailing whitespace at the end of lines
      // https://eslint.org/docs/rules/no-trailing-spaces
      'no-trailing-spaces': 1,

      // disallow this/super before calling super() in constructors
      // https://eslint.org/docs/rules/no-this-before-super
      'no-this-before-super': 1,

      // disallow the use of undeclared variables unless mentioned in /*global */ comments
      // https://eslint.org/docs/rules/no-undef
      'no-undef': 1,

      // disallow confusing multiline expressions
      // https://eslint.org/docs/rules/no-unexpected-multiline
      'no-unexpected-multiline': 1,

      // disallow unreachable code after return, throw, continue, and break statements
      // https://eslint.org/docs/rules/no-unreachable
      'no-unreachable': 2,

      // disallow control flow statements in finally blocks
      // https://eslint.org/docs/rules/no-unsafe-finally
      'no-unsafe-finally': 1,

      // disallow negating the left operand of relational operators
      // https://eslint.org/docs/rules/no-unsafe-negation
      'no-unsafe-negation': 1,

      // disallow unused labels
      // https://eslint.org/docs/rules/no-unused-labels
      'no-unused-labels': 1,

      // Disallow Unused Variables
      // https://eslint.org/docs/rules/no-unused-vars
      'no-unused-vars': 1,

      // disallow ternary operators when simpler alternatives exist
      // https://eslint.org/docs/rules/no-unneeded-ternary
      'no-unneeded-ternary': 1,

      // Disallow unnecessary concatenation of strings
      // https://eslint.org/docs/rules/no-useless-concat
      'no-useless-concat': 1,

      // Disallow unnecessary constructor
      // https://eslint.org/docs/rules/no-useless-constructor
      'no-useless-constructor': 2,

      // disallow unnecessary escape characters
      // https://eslint.org/docs/rules/no-useless-escape
      'no-useless-escape': 1,

      // Require let or const instead of var
      // https://eslint.org/docs/rules/no-var
      'no-var': 1,

      // enforce consistent line breaks inside braces
      // https://eslint.org/docs/rules/object-curly-newline
      'object-curly-newline': [2, {
          'consistent': true
      }],

      // enforce consistent spacing inside braces
      // https://eslint.org/docs/rules/object-curly-spacing
      'object-curly-spacing': 1,

      // enforce variables to be declared either together or separately in functions
      // https://eslint.org/docs/rules/one-var
      'one-var': [1, 'never'],

      // require or disallow assignment operator shorthand where possible
      // https://eslint.org/docs/rules/operator-assignment
      'operator-assignment': 1,

      // require quotes around object literal property names
      // https://eslint.org/docs/rules/quote-props
      'quote-props': [1, 'consistent'],

      // Enforce the consistent use of either backticks, double, or single quotes
      // https://eslint.org/docs/rules/quotes
      'quotes': [1, 'single', {
          'avoidEscape': true,
          'allowTemplateLiterals': true
      }],

      // require generator functions to contain yield
      // https://eslint.org/docs/rules/require-yield
      'require-yield': 1,

      // Require or disallow semicolons instead of ASI
      // https://eslint.org/docs/rules/semi
      'semi': [1, 'always', {
          'omitLastInOneLineBlock': true
      }],

      // Enforce spacing before and after semicolons
      // https://eslint.org/docs/rules/semi-spacing
      'semi-spacing': 2,

      // Enforce location of semicolons
      // https://eslint.org/docs/rules/semi-style
      'semi-style': [2, 'last'],

      // Require Or Disallow Space Before Blocks
      // https://eslint.org/docs/rules/space-before-blocks
      'space-before-blocks': 1,

      // Require or disallow a space before function parenthesis
      // https://eslint.org/docs/rules/space-before-function-paren
      'space-before-function-paren': [1, 'never'],

      // Disallow or enforce spaces inside of parentheses
      // https://eslint.org/docs/rules/space-in-parens
      'space-in-parens': 1,

      // Require or disallow spaces before/after unary operators
      // https://eslint.org/docs/rules/space-unary-ops
      'space-unary-ops': 1,

      // Enforce spacing around colons of switch statements
      // https://eslint.org/docs/rules/switch-colon-spacing
      'switch-colon-spacing': 1,

      // Enforce Usage of Spacing in Template Strings
      // https://eslint.org/docs/rules/template-curly-spacing
      'template-curly-spacing': 1,

      // require calls to isNaN() when checking for NaN
      // https://eslint.org/docs/rules/use-isnan
      'use-isnan': 1,

      // enforce comparing typeof expressions against valid strings
      // https://eslint.org/docs/rules/valid-typeof
      'valid-typeof': 2,

      // Require Regex Literals to be Wrapped
      // https://eslint.org/docs/rules/wrap-regex
      'wrap-regex': 1,

      // Enforce consistent indentation in <template>
      // https://eslint.vuejs.org/rules/html-indent.html
      "vue/html-indent": ["warning", 4, {
          "attribute": 4,
          "closeBracket": 0
      }],

      // Require or disallow a line break before tag's closing brackets
      // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
      "vue/html-closing-bracket-newline": ["warming", {
          "singleline": "never",
          "multiline": "never"
      }],

      // Enforce the maximum number of attributes per line
      // https://eslint.vuejs.org/rules/max-attributes-per-line.html
      "vue/max-attributes-per-line": ["warming", {
          "singleline": 3,
          "multiline": {
              "max": 1,
              "allowFirstLine": false
          }
      }],

      // Require a line break before and after the contents of a singleline element
      // https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
      "vue/singleline-html-element-content-newline": false,

      // Require a line break before and after the contents of a multiline element
      // https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
      "vue/multiline-html-element-content-newline": false,

      // Require type definitions in props
      // https://eslint.vuejs.org/rules/require-prop-types.html
      "vue/require-prop-types": false,

      // Disallow use of v-html to prevent XSS attack
      // https://eslint.vuejs.org/rules/no-v-html.html
      "vue/no-v-html": false
  },
};
