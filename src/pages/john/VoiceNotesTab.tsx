import AudioPlayer from '@/components/AudioPlayer';
import Reveal from '@/components/Reveal';
import { AVATAR_INITIAL, VOICE_NOTE } from '@/pages/john/data';

/** TAB: Voice Notes (1) - his recorded message, large and centered. */
export default function VoiceNotesTab() {
  return (
    <div className="mx-auto max-w-reading">
      <Reveal>
        <div className="text-center">
          <p className="eyebrow eyebrow-centered">His Voice</p>
          <h2 className="type-h2 mt-4 text-body">Voice Notes</h2>
          <p className="mt-4 leading-relaxed text-soft">{VOICE_NOTE.description}</p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <AudioPlayer
          title={VOICE_NOTE.title}
          durationSeconds={42}
          avatarInitial={AVATAR_INITIAL}
          className="mt-10 p-6"
        />
      </Reveal>
      <Reveal delay={0.15}>
        <p className="type-meta mt-6 text-center text-soft">
          Family members can add voice notes - guardians approve.
        </p>
      </Reveal>
    </div>
  );
}
