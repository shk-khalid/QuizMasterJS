const categories = {
    "Pipes and Cisterns": [
        { question: "Pipe A can fill a tank in 20 hours. How much time will it take for 2 pipes?", options: ["10", "20", "30", "40"], correct: 1 },
        { question: "Pipe B can empty the tank in 10 hours. How much time will it take for 3 pipes?", options: ["15", "25", "35", "45"], correct: 2 },
        { question: "Pipe C can fill a tank in 12 hours, while Pipe D can empty it in 15 hours. If both are opened together, how long will it take to fill the tank?", options: ["60", "45", "30", "36"], correct: 3 },
        { question: "Pipe A can fill the tank in 6 hours. If Pipe B, which can empty the tank in 12 hours, is opened after 2 hours, how much longer will it take to fill the tank?", options: ["8", "6", "12", "10"], correct: 0 },
        { question: "A pipe can fill a cistern in 8 hours, but due to a leakage, it takes 10 hours. How long will the leak take to empty the cistern?", options: ["40", "20", "30", "50"], correct: 1 },
        { question: "If two pipes A and B can fill a tank in 6 and 8 hours respectively, how long will they take if opened together?", options: ["3.43", "3", "4.36", "5"], correct: 0 },
        { question: "Pipe A fills the tank in 5 hours, and Pipe B can empty it in 10 hours. Both are opened together. How long will it take to fill the tank?", options: ["10", "15", "20", "30"], correct: 3 },
        { question: "Two pipes can fill a cistern in 12 minutes and 15 minutes, respectively. How much time will they take if both are opened together?", options: ["6", "7.5", "8", "9"], correct: 1 },
        { question: "A pipe fills a tank in 6 hours, but a second pipe empties it in 8 hours. Both are opened together. What is the net fill rate?", options: ["1/24", "1/12", "1/6", "1/8"], correct: 0 },
        { question: "Three pipes A, B, and C can fill a tank in 12, 15, and 20 hours, respectively. If all three pipes are opened together, how long will it take to fill the tank?", options: ["3", "5", "4", "6"], correct: 2 },
        ],

    "Probability": [
        { question: "What is the probability of getting a 6 on a die?", options: ["1/2", "1/6", "1/4", "1/3"], correct: 1 },
        { question: "What is the probability of drawing an Ace from a deck?", options: ["1/13", "1/52", "1/4", "1/26"], correct: 0 },
        { question: "What is the probability of drawing a red card from a deck of cards?", options: ["1/2", "1/3", "1/4", "1/8"], correct: 0 },
        { question: "What is the probability of getting heads in a single coin toss?", options: ["1/2", "1/3", "1/4", "1/6"], correct: 0 },
        { question: "Two dice are rolled. What is the probability of getting a sum of 7?", options: ["1/6", "1/36", "1/18", "1/12"], correct: 0 },
        { question: "If a bag contains 3 red and 2 blue balls, what is the probability of drawing a red ball?", options: ["1/2", "2/5", "3/5", "1/3"], correct: 2 },
        { question: "What is the probability of selecting a king from a deck of 52 cards?", options: ["1/13", "1/52", "1/4", "1/26"], correct: 0 },
        { question: "A coin is tossed twice. What is the probability of getting at least one heads?", options: ["1/2", "3/4", "1/4", "1/8"], correct: 1 },
        { question: "What is the probability of drawing a queen from a deck of cards?", options: ["1/13", "1/26", "1/52", "1/4"], correct: 0 },
        { question: "What is the probability of getting two tails when tossing two coins?", options: ["1/4", "1/2", "3/4", "1/8"], correct: 0 },
        ],

    "Problems on Age": [
        { question: "John is 15 years older than David. If John is 35 years old, how old is David?", options: ["20", "22", "25", "30"], correct: 0 },
        { question: "A father is 5 times as old as his son. In 5 years, the father will be 3 times as old. What is the son's age now?", options: ["5", "10", "15", "20"], correct: 1 },
        { question: "A father is 24 years older than his son. In two years, the father will be twice as old as the son. What is the son's present age?", options: ["20", "21", "22", "23"], correct: 2 },
        { question: "The average age of three children is 12 years. If the ages of the first and second children are 8 and 10 years respectively, what is the age of the third child?", options: ["14", "16", "12", "18"], correct: 1 },
        { question: "The sum of the ages of 5 children born at the interval of 3 years is 50 years. What is the age of the youngest child?", options: ["3", "4", "5", "6"], correct: 2 },
        { question: "The age of the father 10 years ago was 5 times the age of his son. 10 years later, the father’s age will be 3 times that of his son. Find the sum of their present ages.", options: ["50", "60", "70", "80"], correct: 3 },
        { question: "The sum of the ages of a father and son is 60 years. If 5 years ago, the father was four times as old as his son, find the present age of the son.", options: ["10", "15", "20", "25"], correct: 1 },
        { question: "A person’s present age is two-fifth of the age of his mother. After 8 years, he will be half the age of his mother. How old is the mother at present?", options: ["40", "42", "50", "48"], correct: 0 },
        { question: "If a person’s age is two-fifth of his mother’s age, and after 8 years, he will be half her age, what is the person’s current age?", options: ["16", "20", "24", "28"], correct: 2 },
        { question: "The sum of the ages of 5 children born at intervals of 4 years each is 50 years. What is the age of the youngest child?", options: ["4", "5", "6", "7"], correct: 0 },
        ],

    "Profit and Loss": [
        { question: "If a man buys an article for $500 and sells it for $600, what is the percentage profit?", options: ["10%", "15%", "20%", "25%"], correct: 2 },
        { question: "A shopkeeper sells a product at 20% profit. If the cost price is $400, what is the selling price?", options: ["$480", "$500", "$520", "$560"], correct: 0 },
        { question: "A person buys a table for $750 and sells it at a loss of 20%. What is the selling price?", options: ["$600", "$650", "$700", "$720"], correct: 0 },
        { question: "If an article is sold at a profit of 25%, and the selling price is $250, what is the cost price?", options: ["$180", "$190", "$200", "$220"], correct: 2 },
        { question: "A shopkeeper earns a profit of 12% by selling a product for $560. What is the cost price?", options: ["$500", "$510", "$520", "$530"], correct: 0 },
        { question: "A man bought a TV for $800 and sold it for $960. What was his profit percentage?", options: ["10%", "15%", "20%", "25%"], correct: 2 },
        { question: "A trader marks his goods 20% above the cost price and allows a discount of 10%. What is the profit percentage?", options: ["8%", "10%", "12%", "15%"], correct: 1 },
        { question: "If a man sells two articles for $120 each, gaining 20% on one and losing 20% on the other, what is his net profit or loss?", options: ["2% loss", "2% profit", "4% loss", "No profit no loss"], correct: 3 },
        { question: "A man sells an article at a loss of 15%. If the cost price is $400, what is the selling price?", options: ["$300", "$320", "$340", "$360"], correct: 3 },
        { question: "If a discount of 10% is allowed on the marked price, and the selling price is $270, what is the marked price?", options: ["$300", "$310", "$320", "$330"], correct: 0 },
        ]
};

export default categories;