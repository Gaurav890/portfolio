// Generate 8-bit arcade sounds using Web Audio API
// This creates sounds programmatically - no audio files needed!

class ArcadeSoundGenerator {
  private audioContext: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      // Check localStorage for mute preference
      const mutePreference = localStorage.getItem('arcadeSoundsMuted');
      this.isMuted = mutePreference === 'true';
    }
  }

  private getAudioContext(): AudioContext {
    if (!this.audioContext && typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return this.audioContext!;
  }

  setMuted(muted: boolean) {
    this.isMuted = muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('arcadeSoundsMuted', muted.toString());
    }
  }

  isSoundMuted(): boolean {
    return this.isMuted;
  }

  // Attention sound - upward chirp (coin pickup style)
  playAttentionSound() {
    if (this.isMuted) return;

    const ctx = this.getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    // Square wave for 8-bit sound
    oscillator.type = 'square';

    // Frequency sweep: 400Hz -> 800Hz
    oscillator.frequency.setValueAtTime(400, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);

    // Volume envelope
    gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.15);
  }

  // Click sound - short blip
  playClickSound() {
    if (this.isMuted) return;

    const ctx = this.getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = 'square';
    oscillator.frequency.value = 600;

    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.05);
  }

  // Success sound - power-up style
  playSuccessSound() {
    if (this.isMuted) return;

    const ctx = this.getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = 'triangle';

    // Arpeggio: C -> E -> G
    oscillator.frequency.setValueAtTime(523, ctx.currentTime); // C
    oscillator.frequency.setValueAtTime(659, ctx.currentTime + 0.08); // E
    oscillator.frequency.setValueAtTime(784, ctx.currentTime + 0.16); // G

    gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
  }
}

// Export singleton instance
export const arcadeSounds = new ArcadeSoundGenerator();
