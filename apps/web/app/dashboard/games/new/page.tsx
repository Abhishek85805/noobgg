"use client";
import { useRouter } from 'next/navigation';
import { GameForm } from '@/components/games/game-form';

export default function NewGamePage() {
  const router = useRouter();
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">New Game</h1>
      <GameForm onSuccess={() => router.push('/dashboard/games')} />
    </div>
  );
}
