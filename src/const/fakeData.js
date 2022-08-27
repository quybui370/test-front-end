const fakeData = [
    {
        id: 1,
        dayName: "Mon",
        dayNumber: "05",
        workouts: []
    },
    {
        id: 2,
        dayName: "Tue",
        dayNumber: "06",
        workouts: [
            {
                name: "Chest Day - with Arm exercise",
                items: [
                    {
                        itemName: "Bench Press Mediummmm",
                        numberExercises: 3,
                        info: "50 lb x 5, 60 lb x 5, 70lb x 5"
                    },
                    {
                        itemName: "Exercise B",
                        numberExercises: 1,
                        info: "40 lb x 10"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        dayName: "Wed",
        dayNumber: "07",
        workouts: [
            {
                name: "Leg Day",
                items: [
                    {
                        itemName: "Exercise C",
                        numberExercises: 1,
                        info: "30 lb x 6"
                    },
                    {
                        itemName: "Exercise D",
                        numberExercises: 1,
                        info: "40 lb x 5"
                    },
                    {
                        itemName: "Exercise E",
                        numberExercises: 1,
                        info: "50 lb x 5"
                    },
                ]
            },
            {
                name: "Arm Day",
                items: [
                    {
                        itemName: "Exercise F",
                        numberExercises: 1,
                        info: "60 lb x 6"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        dayName: "Thu",
        dayNumber: "08",
        workouts: []
    },
    {
        id: 5,
        dayName: "Fri",
        dayNumber: "09",
        workouts: []
    },
    {
        id: 6,
        dayName: "Sat",
        dayNumber: "10",
        workouts: []
    },
    {
        id: 7,
        dayName: "Sun",
        dayNumber: "11",
        workouts: []
    }
];

export default fakeData;
