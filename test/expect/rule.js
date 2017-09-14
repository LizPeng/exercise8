module.exports = {
  type: 'stylesheet',
  stylesheet: {
    rules: [ //rulesList = rules(),清除起始空格；node = rule() 然后push到rules里面
      {//rule包含一个type,selectors,declarations
        type: 'rule',
        selectors: '.hot',//sel = selector()
        declarations: [//declarations()
          {//declaration()
            type: 'declaration',//match匹配
            property: 'color',
            value: 'red'
          },
          {
            type: 'declaration',
            property: 'text-align',
            value: 'center'
          }
        ]
      }
    ]
  }
}