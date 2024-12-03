import { GetMessageDto } from "./dto/MessageDto";

export const conversationData = [
  {
    conversationName: "Tech Enthusiasts",
    conversationImage: "https://via.placeholder.com/150",
    conversationWhoMessaged: "Alice",
    conversationLastMessage: "Anyone tried the new AI tool? It's pretty impressive!",
    conversationLastMessageTime: "2 hours ago",
  },
  {
    conversationName: "Weekend Hikers",
    conversationImage: "https://via.placeholder.com/150",
    conversationWhoMessaged: "Bob",
    conversationLastMessage: "Can't wait for the hike this Saturday! Who's bringing the snacks?",
    conversationLastMessageTime: "5 hours ago",
  },
  {
    conversationName: "Movie Buffs",
    conversationImage: "https://via.placeholder.com/150",
    conversationWhoMessaged: "Charlie",
    conversationLastMessage: "Just saw the new action movie! Thoughts on the ending?",
    conversationLastMessageTime: "1 day ago",
  },
  {
    conversationName: "Coding Warriors",
    conversationImage: "https://via.placeholder.com/150",
    conversationWhoMessaged: "Diana",
    conversationLastMessage: "Finished the project! Ready to deploy this weekend.",
    conversationLastMessageTime: "6 hours ago",
  },
  {
    conversationName: "Cooking Club",
    conversationImage: "https://via.placeholder.com/150",
    conversationWhoMessaged: "Eve",
    conversationLastMessage: "I tried making sushi at home – it turned out amazing!",
    conversationLastMessageTime: "3 hours ago",
  },
  {
    conversationName: "Gaming Legends",
    conversationImage: "https://via.placeholder.com/150",
    conversationWhoMessaged: "Frank",
    conversationLastMessage: "Team, are we ready for the tournament this weekend?",
    conversationLastMessageTime: "2 hours ago",
  },
  {
    conversationName: "Travel Buddies",
    conversationImage: "https://via.placeholder.com/150",
    conversationWhoMessaged: "Grace",
    conversationLastMessage: "I found the perfect beach resort for our vacation!",
    conversationLastMessageTime: "4 hours ago",
  },
  {
    conversationName: "Photography Lovers",
    conversationImage: "https://via.placeholder.com/150",
    conversationWhoMessaged: "Hank",
    conversationLastMessage: "Check out this stunning shot I took during sunset yesterday.",
    conversationLastMessageTime: "1 day ago",
  },
  {
    conversationName: "Book Club",
    conversationImage: "https://via.placeholder.com/150",
    conversationWhoMessaged: "Ivy",
    conversationLastMessage: "I just finished reading the latest novel – it was incredible!",
    conversationLastMessageTime: "7 hours ago",
  },
  {
    conversationName: "Book Club",
    conversationImage: "https://via.placeholder.com/150",
    conversationWhoMessaged: "Ivy",
    conversationLastMessage: "I just finished reading the latest novel – it was incredible!",
    conversationLastMessageTime: "7 hours ago",
  },
  {
    conversationName: "Book Club",
    conversationImage: "https://via.placeholder.com/150",
    conversationWhoMessaged: "Ivy",
    conversationLastMessage: "I just finished reading the latest novel – it was incredible!",
    conversationLastMessageTime: "7 hours ago",
  },
  {
    conversationName: "Book Club",
    conversationImage: "https://via.placeholder.com/150",
    conversationWhoMessaged: "Ivy",
    conversationLastMessage: "I just finished reading the latest novel – it was incredible!",
    conversationLastMessageTime: "7 hours ago",
  },
  
];

export const userLoggedId = "1";
export const messageData: GetMessageDto[] = [
  {
    "id": "1",
    "content": "Hey, how's it going?",
    "embeddedMedia": [],
    "chatRoomId": "1",
    "sentById": "1",
    "sentAt": new Date().toISOString(),
    "seenById": []
  },
  {
    "id": "2",
    "content": "Good! Just been super busy with work. How about you?",
    "embeddedMedia": [],
    "chatRoomId": "1",
    "sentById": "2",
    "sentAt": new Date().toISOString(),
    "seenById": []
  },
  {
    "id": "3",
    "content": "Same here, lots of stuff going on. I need a break soon!",
    "embeddedMedia": [],
    "chatRoomId": "1",
    "sentById": "1",
    "sentAt": new Date().toISOString(),
    "seenById": []
  },
  {
    "id": "4",
    "content": "Haha, tell me about it! Any plans for the weekend?",
    "embeddedMedia": [],
    "chatRoomId": "1",
    "sentById": "2",
    "sentAt": new Date().toISOString(),
    "seenById": []
  },
  {
    "id": "5",
    "content": "I was thinking of going hiking. What about you?",
    "embeddedMedia": [],
    "chatRoomId": "1",
    "sentById": "1",
    "sentAt": new Date().toISOString(),
    "seenById": []
  },
  {
    "id": "6",
    "content": "That sounds awesome! I might join you. Where are you going?",
    "embeddedMedia": [],
    "chatRoomId": "1",
    "sentById": "2",
    "sentAt": new Date().toISOString(),
    "seenById": []
  },
  {
    "id": "7",
    "content": "Great! I'm planning to head to the Blue Mountains. Want to carpool?",
    "embeddedMedia": [],
    "chatRoomId": "1",
    "sentById": "1",
    "sentAt": new Date().toISOString(),
    "seenById": []
  },
  {
    "id": "8",
    "content": "Sounds like a plan! I'll bring some snacks for the trip.",
    "embeddedMedia": [],
    "chatRoomId": "1",
    "sentById": "2",
    "sentAt": new Date().toISOString(),
    "seenById": []
  },
  {
    "id": "9",
    "content": "Awesome, I’ll bring the drinks! It’s going to be so much fun!",
    "embeddedMedia": [],
    "chatRoomId": "1",
    "sentById": "1",
    "sentAt": new Date().toISOString(),
    "seenById": []
  },
  {
    "id": "10",
    "content": "So, as we’ve been planning for the hike this weekend, I was thinking about how much I’ve missed spending time outdoors. It's been a while since I've gone on a proper trip, you know? Between work, responsibilities, and everything else, I feel like I’ve barely had time to breathe. So, this weekend will be a welcome break. Plus, I’ve heard the views at the Blue Mountains are absolutely breathtaking – I can’t wait to see it in person. And, oh, we should definitely bring a camera or maybe even try taking some cool pictures with our phones. It’ll be nice to have some memories from the trip. I know hiking sounds simple, but it feels like the perfect escape for me. Also, have you been there before, or is this your first time too? I’ve heard there are some hidden spots that not many people know about, so we might even discover something amazing. I’m really looking forward to it!",
    "embeddedMedia": [],
    "chatRoomId": "1",
    "sentById": "1",
    "sentAt": new Date().toISOString(),
    "seenById": []
  }
]

