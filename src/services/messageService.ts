class MessageService {
  private baseUrl = 'http://dchat-backend.azurewebsites.net/api/v1';

  async getMessages(username: string): Promise<any[]> {
    try {
      const response = await fetch(`${this.baseUrl}/messages/?toUserName=${username}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching messages:', error);
      return []; // Return empty array instead of throwing to prevent app crash
    }
  }
}

export const messageService = new MessageService();