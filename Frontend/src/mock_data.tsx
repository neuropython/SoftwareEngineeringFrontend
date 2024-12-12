import { ChatRoomDto } from "./dto/ChatRoomDto";
import { GetMessageDto } from "./dto/MessageDto";

export const conversationData: ChatRoomDto[] = [
  {
    id: "1",
    messages: [
      {
        id: "m1",
        sentById: "user1",
        content: "Hello!",
        sentAt: "2023-10-01T10:00:00Z",
        chatRoomId: "1",
        seenById: ["user2"],
        embeddedMedia: [],
      },
      // Add more messages as needed
    ],
    members: [
      {
        userId: "user1",
        role: "user",
        nickname: "Ally",
      },
      {
        userId: "user2",
        role: "user",
        nickname: "Bobby",
      },
    ],
  },
  {
    id: "2",
    messages: [
      {
        id: "m1",
        sentById: "user1",
        content: "Hello!",
        sentAt: "2023-10-01T10:00:00Z",
        chatRoomId: "1",
        seenById: ["user2"],
        embeddedMedia: [],
      },
      // Add more messages as needed
    ],
    members: [
      {
        userId: "user1",
        role: "user",
        nickname: "Ally",
      },
      {
        userId: "user2",
        role: "user",
        nickname: "Bobby",
      },
    ],
  },
  {
    id: "3",
    messages: [
      {
        id: "m1",
        sentById: "user1",
        content: "Hello!",
        sentAt: "2023-10-01T10:00:00Z",
        chatRoomId: "1",
        seenById: ["user2"],
        embeddedMedia: [],
      },
      // Add more messages as needed
    ],
    members: [
      {
        userId: "user1",
        role: "user",
        nickname: "Ally",
      },
      {
        userId: "user2",
        role: "user",
        nickname: "Bobby",
      },
    ],
  },
  {
    id: "4",
    messages: [
      {
        id: "m1",
        sentById: "user1",
        content: "Hello!",
        sentAt: "2023-10-01T10:00:00Z",
        chatRoomId: "1",
        seenById: ["user2"],
        embeddedMedia: [],
      },
      // Add more messages as needed
    ],
    members: [
      {
        userId: "user1",
        role: "user",
        nickname: "Ally",
      },
      {
        userId: "user2",
        role: "user",
        nickname: "Bobby",
      },
    ],
  },
  {
    id: "5",
    messages: [
      {
        id: "m1",
        sentById: "user1",
        content: "Hello!",
        sentAt: "2023-10-01T10:00:00Z",
        chatRoomId: "1",
        seenById: ["user2"],
        embeddedMedia: [],
      },
      // Add more messages as needed
    ],
    members: [
      {
        userId: "user1",
        role: "user",
        nickname: "Ally",
      },
      {
        userId: "user2",
        role: "user",
        nickname: "Bobby",
      },
    ],
  },
  {
    id: "6",
    messages: [
      {
        id: "m1",
        sentById: "user1",
        content: "Hello!",
        sentAt: "2023-10-01T10:00:00Z",
        chatRoomId: "1",
        seenById: ["user2"],
        embeddedMedia: [],
      },
      // Add more messages as needed
    ],
    members: [
      {
        userId: "user1",
        role: "user",
        nickname: "Ally",
      },
      {
        userId: "user2",
        role: "user",
        nickname: "Bobby",
      },
    ],
  },
];

export const userLoggedId = "1";
export const messageData: GetMessageDto[] = [
  {
    id: "1",
    content: "Hey, how's it going?",
    embeddedMedia: [],
    chatRoomId: "1",
    sentById: "1",
    sentAt: new Date().toISOString(),
    seenById: [],
  },
  {
    id: "2",
    content: "Good! Just been super busy with work. How about you?",
    embeddedMedia: [],
    chatRoomId: "1",
    sentById: "2",
    sentAt: new Date().toISOString(),
    seenById: [],
  },
  {
    id: "3",
    content: "Same here, lots of stuff going on. I need a break soon!",
    embeddedMedia: [],
    chatRoomId: "1",
    sentById: "1",
    sentAt: new Date().toISOString(),
    seenById: [],
  },
  {
    id: "4",
    content: "Haha, tell me about it! Any plans for the weekend?",
    embeddedMedia: [],
    chatRoomId: "1",
    sentById: "2",
    sentAt: new Date().toISOString(),
    seenById: [],
  },
  {
    id: "5",
    content: "I was thinking of going hiking. What about you?",
    embeddedMedia: [],
    chatRoomId: "1",
    sentById: "1",
    sentAt: new Date().toISOString(),
    seenById: [],
  },
  {
    id: "6",
    content: "That sounds awesome! I might join you. Where are you going?",
    embeddedMedia: [],
    chatRoomId: "1",
    sentById: "2",
    sentAt: new Date().toISOString(),
    seenById: [],
  },
  {
    id: "7",
    content:
      "Great! I'm planning to head to the Blue Mountains. Want to carpool?",
    embeddedMedia: [],
    chatRoomId: "1",
    sentById: "1",
    sentAt: new Date().toISOString(),
    seenById: [],
  },
  {
    id: "8",
    content: "Sounds like a plan! I'll bring some snacks for the trip.",
    embeddedMedia: [],
    chatRoomId: "1",
    sentById: "2",
    sentAt: new Date().toISOString(),
    seenById: [],
  },
  {
    id: "9",
    content: "Awesome, I’ll bring the drinks! It’s going to be so much fun!",
    embeddedMedia: [],
    chatRoomId: "1",
    sentById: "1",
    sentAt: new Date().toISOString(),
    seenById: [],
  },
  {
    id: "10",
    content:
      "So, as we’ve been planning for the hike this weekend, I was thinking about how much I’ve missed spending time outdoors. It's been a while since I've gone on a proper trip, you know? Between work, responsibilities, and everything else, I feel like I’ve barely had time to breathe. So, this weekend will be a welcome break. Plus, I’ve heard the views at the Blue Mountains are absolutely breathtaking – I can’t wait to see it in person. And, oh, we should definitely bring a camera or maybe even try taking some cool pictures with our phones. It’ll be nice to have some memories from the trip. I know hiking sounds simple, but it feels like the perfect escape for me. Also, have you been there before, or is this your first time too? I’ve heard there are some hidden spots that not many people know about, so we might even discover something amazing. I’m really looking forward to it!",
    embeddedMedia: [],
    chatRoomId: "1",
    sentById: "1",
    sentAt: new Date().toISOString(),
    seenById: [],
  },
];
