import { createStore } from 'vuex'

export default createStore({
  state: {
    currentCardIndex: 0,
    companies: [
      {
        name: 'Афкор', 
        scoring: [
          [9,8,5,6],
          [6,9,7],
          [7,9,8],
          [9,7.5,0,8],
          [6,9],
          [9,8,6],
          [7,8,9,0]
        ],
        scores: 0
      },
      {
        name: 'Alif Academy', 
        scoring: [
          [7.5,9,7,7],
          [5,8,8.5],
          [7,7.75,9],
          [8.5,9,7.5,0],
          [7,9],
          [9,8,6],
          [9,8,7,0]
        ],
        scores: 0
      },
      {
        name: 'Coddy', 
        scoring: [
          [8,7,8.5,8.5],
          [7,8.5,8.5],
          [10,8,6],
          [8.7,8.7,0,8],
          [8,8],
          [8,7,9],
          [7,8,9,0]
        ],
        scores: 0
      },
      {
        name: 'Инноватсияи Ояндасоз', 
        scoring: [
          [8.7,10,6,7],
          [6,8.5,9],
          [6,8.5,8.5],
          [7.7,7.5,7.8,8],
          [5.5,8.4],
          [8,9,7],
          [5.5,5.5,5.5,10]
        ],
        scores: 0
      },
      {
        name: 'Juniorcode',
        scoring: [
          [6,7,9,7],
          [9,7,3],
          [7.5,6,7.5],
          [7.5,7,5,0],
          [7,8],
          [9,8,6],
          [9,8,7,0]
        ],
        scores: 0
      },
      {
        name: 'IT RUN',
        scoring: [
          [7,8,8.5,8.5],
          [8,9,3],
          [7.7,7,8],
          [8,7.5,8,0],
          [8,7.5],
          [8,9,5.5],
          [8,9,8,0]
        ],
        scores: 0
      }
    ],
    schools: [
      {
        name: 'Шекспир',
        scoring: [
          [7,9],
          [3,0,9],
          [10,8,2],
          [6,9],
          [7,9],
        ],
        scores: 0
      },
      {
        name: 'Arkon',
        scoring: [
          [9,7],
          [7.5,8,7],
          [2,7.5,9],
          [8,7],
          [9,6],
        ],
        scores: 0
      },
      {
        name: 'Доно',
        scoring: [
          [7.5,7.5],
          [6,0,7.5],
          [2,10,5.5],
          [6,7.5],
          [8,6],
        ],
        scores: 0
      }
    ]
  },
  getters: {
    questions: () => (
      [
        {title: 'В чем ваша цель изучения IT ?', variants: ['Трудоустройство','Стажировка','Развитие логики','Собственные проекты']},
        {title: 'Сколько вам лет ?', variants: ['5 - 14','14 - 18','18 +']},
        {title: 'Какую методику обучения предпочитаете ?', variants: ['Международные стандарты','Направленное на реальные задачи','Разработанные, собственные']},
        {title: 'Какую сферу хотите изучить ?', variants: ['Frontend','Backend','Android','Дизайн']},
        {title: 'Каким должен быть учитель ?', variants: ['Мастер обучения - педагог','Опытный разработчик']},
        {title: 'Какая из этих локаций ближе к вам ?', variants: ['Универмаг','Стадион','19 мкр']},
        {title: 'На какие цены вы примерно рассчитываете ?', variants: ['200 c. - 280 c.','300 c. - 380 c.','380 c. - 500 c.','Не могу платить']},
      ]
    ),
    questionsLang: () => (
      [
        {title: 'Какую область вы бы хотели изучить в языке ?', variants: ['Бизнес-английский','Общий разговорный']},
        {title: 'Какой формат обучения вас больше интересует ?', variants: ['Индивидуальный занятия','Онлайн-курсы','Обучение в классе']},
        {title: 'Какие дополнительные услуги вас интересуют ?', variants: ['Разговорные клубы и дебаты','Подготовка к экзаменам TOEFL/IELTS','Общение с иностранным учителем']},
        {title: 'Какова ваша главная цель изучения языка ?', variants: ['Карьерный рост и профессиональное развитие','Улучшение навыков общения и общей грамотности']},
        // {title: 'Заинтересованы ли вы в развитии критического мышления ?', variants: ['Да','Нет']},        
        {title: 'Что для вас важнее ?', variants: ['Грамматика','Общение']},
      ]
    ),
  },
  mutations: {
    distributeScores(state, payload) {
      const questionIndex = state.currentCardIndex
      const answerIndex = payload.answerIndex
      console.log('question' + questionIndex)
      console.log('answer ' + payload.answerIndex)
      for(let i =0; i < state.companies.length; i++) {
        let scoreToAdd = state.companies[i].scoring[questionIndex][answerIndex]
        console.log(scoreToAdd)
        state.companies[i].scores += scoreToAdd
      }
      console.log(state.companies)
    },
    distributeLangScores(state, payload) {
      const questionIndex = state.currentCardIndex
      const answerIndex = payload.answerIndex
      console.log('question' + questionIndex)
      console.log('answer ' + payload.answerIndex)
      for(let i =0; i < state.schools.length; i++) {
        let scoreToAdd = state.schools[i].scoring[questionIndex][answerIndex]
        console.log(scoreToAdd)
        state.schools[i].scores += scoreToAdd
      }
      console.log(state.schools)
    }
  },
  actions: {
  },
  modules: {
  }
})















