import AudioPlayer from "../components/AudioPlayer";

export default function Dev__Page() {
  return (
    <div className="mx-auto container py-10">
      <div className="max-w-sm">
        <h3 className="font-uthman text-2xl mb-2 mt-4 text-end px-4">
          سورة يس
        </h3>
        <AudioPlayer src="https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/36.mp3" />
        <h3 className="font-uthman text-2xl mb-2 mt-4 text-end px-4">
          سورة الفاتحة
        </h3>
        <AudioPlayer src="https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3" />
        <h3 className="font-uthman text-2xl mb-2 mt-4 text-end px-4">
          سورة الناس
        </h3>
        <AudioPlayer src="https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/114.mp3" />
        <h3 className="font-uthman text-2xl mb-2 mt-4 text-end px-4">
          سورة الفلق
        </h3>
        <AudioPlayer src="https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/113.mp3" />
        <h3 className="font-uthman text-2xl mb-2 mt-4 text-end px-4">
          سورة الاخلاص
        </h3>
        <AudioPlayer src="https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/112.mp3" />
      </div>
    </div>

    /**
     * TODO: create another space in the app to be specific only for the audio, radio, etc;
     *
     * ?  The audio space may include:
     * *  Account for each reciter, the account includes his recitations in different types;
     * *  General special recitations and things like "رقية";
     * *  Radio;
     */

    /**
     * TODO;
     * ---- verse of today - random daily verse
     */
  );
}
