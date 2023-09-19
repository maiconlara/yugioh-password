interface CardSet {
    set_name: string;
    set_code: string;
    set_rarity: string;
    set_rarity_code: string;
    set_price: string;
  }
  
  export interface CardImage {
    id: number;
    image_url: string;
    image_url_small: string;
    image_url_cropped: string;
  }
  
  interface CardPrices {
    cardmarket_price: string;
    tcgplayer_price: string;
    ebay_price: string;
    amazon_price: string;
    coolstuffinc_price: string;
  }
  
  export interface CardData {
    id: number;
    name: string;
    type: string;
    frameType: string;
    desc: string;
    atk: number;
    def: number;
    level: number;
    race: string;
    attribute: string;
    linkval?: number;
    card_sets: CardSet[];
    card_images: CardImage[];
    card_prices: CardPrices[];
  }
  
  export interface CardObject {
    data: CardData[];
  }