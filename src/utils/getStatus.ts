
export const getStatus = (status: string) => {
    switch (status) {
        case "done" : {
            return "Выполнен"
        }
        case "created" : {
            return "Создан"
        }
        case "pending" : {
            return "Отменён"
        }
    }
}