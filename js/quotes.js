const quotes = [
  {
    quote:
      "It's only after we've lost everything that we're free to do anything.",
    quoteKo: "우린 모든 것을 잃은 후에야 무슨 일이든 자유롭게 할 수 있다.",
    title: "Fight Club",
    titleKo: "파이트클럽",
  },
  {
    quote:
      "It is not our abilities that show what we truly are, it is our choices.",
    quoteKo:
      "우리가 진정 무엇인지 보여주는 것은 우리의 능력이 아니라 우리가 만드는 선택이다.",
    title: "Harry Potter",
    titleKo: "해리 포터",
  },
  {
    quote:
      "The past can hurt, but you can either run from it, or learn from it.",
    quoteKo:
      "과거는 아플 수 있어, 하지만 과거로부터 도망갈 수도 있고 배울 수도 있어.",
    title: "Lion King",
    titleKo: "라이온 킹",
  },
  {
    quote:
      "At some point you've got to decide for yourself who you gonna be. Can't let nobody make that decision for you.",
    quoteKo:
      "어떤 순간에는 네가 무엇이 되고 싶은지 너 스스로 결정해야 해. 그때는 그 누구도 널 대신해서 결정해 줄 수는 없어.",
    title: "Moonlight",
    titleKo: "문라이트",
  },
  {
    quote: "Carpe Diem, Seize the day. Make your lives extraordinary.",
    quoteKo: "카르페 디엠, 오늘 하루를 잡아라. 삶을 특별하게 만들어라.",
    title: "Dead Poets Society",
    titleKo: "죽은 시인의  사회",
  },
  {
    quote: "I don't regret the things I've done, but those I did not do.",
    quoteKo: "내가 한 일들을 후회하진 않지만, 하지 않은 일들은 후회해",
    title: "Empire Records",
    titleKo: "엠파이어 레코즈",
  },
  {
    quote:
      "All we have to decide is what to do with the time that is given to us.",
    quoteKo:
      "우리가 결정해야 하는 것은 우리에게 주어진 지간을 어떻게 사용할 것인가 그뿐이야.",
    title: "Lord of the rings",
    titleKo: "반지의 제왕",
  },
  {
    quote: "Good words, good thoughts and good deeds.",
    quoteKo: "좋은 말, 좋은 생각, 그리고 좋은 행동",
    title: "Bohemian Rhapsody",
    titleKo: "보헤미안 랩소디",
  },
  {
    quote: "Life is a journey to be experienced, not a problem to be solved.",
    quoteKo: "인생은 해결해야 할 문제가 아니라 경험해야 할 여정입니다.",
    title: "Winnie The Pooh",
    titleKo: "곰돌이 푸",
  },
  {
    quote: "Remember you’re the one who can fill the world with sunshine.",
    quoteKo: "기억해. 너는 세상을 빛으로 채울 수 있는 존재라는 걸.",
    title: "Snow White",
    titleKo: "백설공주",
  },
  {
    quote:
      "A true hero isn’t measured by the size of his strength, but by the strength of his heart.",
    quoteKo: "진정한 영웅은 힘의 크기가 아니라 마음의 힘으로 측정됩니다.",
    title: "Hercules",
    titleKo: "헤라클레스",
  },
  {
    quote:
      "very day, every minute, every second, you have a chance to change your life.",
    quoteKo: "매일, 매분, 매초 인생을 바꿀 수 있는 기회가 있어.",
    title: "Dumbo",
    titleKo: "덤보",
  },
  {
    quote:
      "There is no one who can’t fall. However, only those who get up again will learn how to move forward.",
    quoteKo:
      "넘어지지 않는 사람은 없어. 단, 다시 일어나는 사람만이 앞으로 나아가는 법을 배우는 거야.",
    title: "Bambi",
    titleKo: "밤비",
  },
  {
    quote: "You still have enough time to make your dreams come true!",
    quoteKo: "너에게는 꿈을 이루기 위한 시간이 아직 충분히 있어!",
    title: "Peter Pan",
    titleKo: "피터팬",
  },
  {
    quote:
      "You can’t always succeed just because you try, but be aware that successful people are who’s tried a lot and put a lot of effort into their goals.",
    quoteKo:
      "노력한다고 항상 성공할 수 없지만 성공한 사람들은 노력을 많이 했다는 걸 알아둬.",
    title: "Winnie The Pooh",
    titleKo: "곰돌이 푸",
  },
  {
    quote:
      "Only I can determine my own mood. And today, perhaps, I will choose happiness.",
    quoteKo: "내 기분은 내가 정해. 오늘 나는 ‘행복’으로 할래.",
    title: "Alice in Wonderland",
    titleKo: "이상한 나라의 앨리스",
  },
  {
    quote:
      "Don’t close your eyes and look straight ahead. The reality of fear can be different from what you think.",
    quoteKo: "눈을 감지 말고 똑바로 봐. 두려움의 실체는 생각과 다를 수 있어.",
    title: "Finding Nemo",
    titleKo: "니모를 찾아서",
  },
  {
    quote:
      "Get out of the place you’re used to. The reward for this will definitely be worth it.",
    quoteKo: "익숙한 곳을 벗어나 봐. 그것에 대한 보상은 분명 가치가 있을 거야.",
    title: "Tangled",
    titleKo: "라푼젤",
  },
];

const quote = document.querySelector("#quote span:first-child");
const quoteKo = document.querySelector("#quote span:nth-child(2)");
const title = document.querySelector("#quote span:nth-child(3)");
const titleKo = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
quoteKo.innerText = todaysQuote.quoteKo;
title.innerText = todaysQuote.title;
titleKo.innerText = todaysQuote.titleKo;

//https://m.blog.naver.com/wonch888/222132180414
//https://toyoutheart.com/%EB%94%94%EC%A6%88%EB%8B%88-%EC%98%81%EC%96%B4-%EB%AA%85%EC%96%B8-%EB%AA%85%EB%8C%80%EC%82%AC-%EB%AA%A8%EC%9D%8C-%EA%B0%90%EB%8F%99%EC%A0%81%EC%9D%B8-%EA%B8%80%EA%B7%80/
