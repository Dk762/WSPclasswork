export class Game {
    
    Players: User[] = [
        { Name: 'DK', MyQuotes: [] },
        { Name: 'KP', MyQuotes: [] },
        { Name: 'VK', MyQuotes: [] },        
    ];
    Dealer: string = "DK";
    Picture: string = 'https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1080-600.jpg';
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