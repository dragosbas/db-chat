interface Message {
  fromusername: string;
  totalmessages: number;
  likecount: number;
  followcount: number;
  sharecount: number;
  concatenatedcomments: string | null;
  lasteventtimestamp: string;
}

class MessageService {
  private baseUrl = 'http://dchat-backend.azurewebsites.net/api/v1';

  async getMessages(currentUserName: string): Promise<Message[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/messages/?toUserName=${currentUserName}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  }
}

export const messageService = new MessageService();