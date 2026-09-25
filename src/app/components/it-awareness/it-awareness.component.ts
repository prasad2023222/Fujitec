import { Component, OnDestroy, OnInit } from '@angular/core';

interface AwarenessMedia {
  id: number;
  type: 'image' | 'video';
  url: string;
  category: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-it-awareness',
  standalone: true,
  imports: [],
  templateUrl: './it-awareness.component.html',
  styleUrl: './it-awareness.component.scss'
})
export class ItAwarenessComponent implements OnInit, OnDestroy {

  /* =========================================================
     IT AWARENESS MEDIA
     ========================================================= */

  awarenessMedia: AwarenessMedia[] = [

    {
      id: 1,
      type: 'image',
      url: 'assets/it-awareness/it-awareness-1.jpg',
      category: 'CYBER SECURITY',
      title: 'Protect Your Digital Workplace',
      description:
        'Simple security practices help keep our people, devices and company information protected.'
    },

    {
      id: 2,
      type: 'image',
      url: 'assets/it-awareness/it-awareness-2.jpg',
      category: 'DATA PROTECTION',
      title: 'Protect Company Information',
      description:
        'Handle company information carefully and make sure sensitive data is shared only through approved channels.'
    },

    {
      id: 3,
      type: 'video',
      url: 'assets/it-awareness/it-awareness-video-1.mp4',
      category: 'SECURITY AWARENESS',
      title: 'Think Before You Click',
      description:
        'Stay alert when opening emails, links and attachments and report anything suspicious.'
    },

    {
      id: 4,
      type: 'image',
      url: 'assets/it-awareness/it-awareness-3.jpg',
      category: 'DEVICE SECURITY',
      title: 'Keep Your Devices Secure',
      description:
        'Keep your workstation protected and use company-approved software and security tools.'
    },

    {
      id: 5,
      type: 'video',
      url: 'assets/it-awareness/it-awareness-video-2.mp4',
      category: 'REMOTE WORK',
      title: 'Stay Secure Wherever You Work',
      description:
        'Follow safe security practices whenever you work remotely or access company resources outside the office.'
    },

    {
      id: 6,
      type: 'image',
      url: 'assets/it-awareness/it-awareness-4.jpg',
      category: 'IT AWARENESS',
      title: 'Security Is Everyone’s Responsibility',
      description:
        'Stay informed, follow company IT guidelines and speak to the IT team whenever you are unsure.'
    }

  ];


  /* =========================================================
     SLIDESHOW STATE
     ========================================================= */

  currentMediaIndex = 0;

  private slideshowTimer: ReturnType<typeof setTimeout> | null = null;

  /*
   * Images stay for 7 seconds.
   * Videos are controlled by the video's "ended" event.
   */
  readonly imageDuration = 7000;


  /* =========================================================
     INITIALIZE
     ========================================================= */

  ngOnInit(): void {
    this.startSlideshow();
  }


  /* =========================================================
     START SLIDESHOW
     ========================================================= */

  startSlideshow(): void {

    this.stopSlideshow();

    if (this.awarenessMedia.length === 0) {
      return;
    }

    const currentMedia =
      this.awarenessMedia[this.currentMediaIndex];

    /*
     * IMPORTANT:
     *
     * If current slide is a video,
     * DO NOT start a timer.
     *
     * The video itself will call nextMedia()
     * when it reaches the end.
     */
    if (currentMedia.type === 'video') {
      return;
    }

    /*
     * Current slide is an image.
     * Wait 7 seconds before moving to next slide.
     */
    this.slideshowTimer = setTimeout(() => {

      this.nextMedia();

    }, this.imageDuration);
  }


  /* =========================================================
     STOP SLIDESHOW
     ========================================================= */

  stopSlideshow(): void {

    if (this.slideshowTimer) {

      clearTimeout(this.slideshowTimer);

      this.slideshowTimer = null;
    }
  }


  /* =========================================================
     NEXT MEDIA
     ========================================================= */

  nextMedia(): void {

    if (this.awarenessMedia.length === 0) {
      return;
    }

    /*
     * Always clear the previous timer first.
     */
    this.stopSlideshow();

    this.currentMediaIndex =
      (this.currentMediaIndex + 1) %
      this.awarenessMedia.length;

    /*
     * Start timing only if the new slide
     * is an image.
     *
     * If it is a video, startSlideshow()
     * intentionally does nothing.
     */
    this.startSlideshow();
  }


  /* =========================================================
     PREVIOUS MEDIA
     ========================================================= */

  previousMedia(): void {

    if (this.awarenessMedia.length === 0) {
      return;
    }

    this.stopSlideshow();

    this.currentMediaIndex =
      this.currentMediaIndex === 0
        ? this.awarenessMedia.length - 1
        : this.currentMediaIndex - 1;

    this.startSlideshow();
  }


  /* =========================================================
     GO TO SPECIFIC SLIDE
     ========================================================= */

  goToMedia(index: number): void {

    if (
      index < 0 ||
      index >= this.awarenessMedia.length
    ) {
      return;
    }

    this.stopSlideshow();

    this.currentMediaIndex = index;

    this.startSlideshow();
  }


  /* =========================================================
     VIDEO FINISHED
     ========================================================= */

  onVideoEnded(): void {

    /*
     * The video has completely finished.
     * Now move to the next media.
     */
    this.nextMedia();
  }


  /* =========================================================
     CLEANUP
     ========================================================= */

  ngOnDestroy(): void {

    this.stopSlideshow();

  }

}