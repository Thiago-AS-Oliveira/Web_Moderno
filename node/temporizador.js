const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/3 * 6 * * 4', function() {
    console.log('Executando tarefa1!', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Tarefa cancelada!')
},20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 6
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Tarefa2!', new Date().getSeconds())
})