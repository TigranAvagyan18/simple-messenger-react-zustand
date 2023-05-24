import { create } from 'zustand';

export const useCurrentUser = create(() => ({
	userId: '123',
	avatar: 'https://randomuser.me/api/portraits/women/38.jpg',
	userName: 'My user'
}));
