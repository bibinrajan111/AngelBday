export type ChatMessage = {
  from: "her" | "me";
  text: string;
  time: string;
};

export const chatMessages: ChatMessage[] = [
  { from: "her", text: "Chetaii", time: "10:27 PM" },
  { from: "me", text: "Ahde", time: "10:28 PM" },
  { from: "her", text: "Oru karyam paranje Ellam normal alle pazhe pole tanne alle", time: "10:28 PM" },
  { from: "me", text: "Athentha Ninak angane oru doubt", time: "10:29 PM" },
  { from: "her", text: "Pinne endelum change ondayittondengi we need a good talk", time: "10:31 PM" },
  { from: "her", text: "Nammakke idu samsarikkam but phoneil venda Neritt samsarikkam Adalle nalladu?", time: "10:44 PM" },
  { from: "me", text: "Ahde atha nallath", time: "10:44 PM" },
  { from: "her", text: "We already are alle...?", time: "10:45 PM" },
  { from: "me", text: "Athe", time: "10:45 PM" },
  { from: "her", text: "Good morning", time: "8:58 AM" },
  { from: "her", text: "Enik onnum tonittillann paranja kallam aayi povum chetai...", time: "9:24 AM" },
  {
    from: "her",
    text: "Njn sherikkum enjoy chaidattond chetaide koode olla time. But chetaik ariyalo... puthiya sthalam joli class okkethintem koode enik maintain chaiyan pattiyillengilo oru commitment indakkitt pinne adu nashippikkan manas vannilla.",
    time: "9:24 AM"
  },
  {
    from: "her",
    text: "Let's get to know each other more Appo oru clarity kittulo I'm ok with that",
    time: "9:41 AM"
  },
  { from: "me", text: "Okei Let's give it a try then", time: "9:44 AM" },
  { from: "her", text: "Okei ❤️", time: "9:46 AM" }
];
