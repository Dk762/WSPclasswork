export class Game {
    
    Players: User[] = [
        { Name: 'DK', MyQuotes: [] },
        { Name: 'KP', MyQuotes: [] },
        { Name: 'VK', MyQuotes: [] },        
    ];
    Dealer: string = "DK";
    Picture: {
        url: string
    };
    PlayedQuotes: Quote[] = [
        { Text: "That's fake news", PlayerName: 'KP', Chosen: false }
    ];
}

export class User {
    Name: string;
    MyQuotes: string[];
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}