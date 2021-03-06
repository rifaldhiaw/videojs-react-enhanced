/// <reference types="react" />
import PropTypes from 'prop-types';
import videojs, { VideoJsPlayer } from 'video.js';
declare function Player(props: Player.PlayerProps): JSX.Element;
declare namespace Player {
    var propTypes: {
        playerOptions: PropTypes.Requireable<PropTypes.InferProps<{
            autoplay: PropTypes.Requireable<string | boolean>;
            controls: PropTypes.Requireable<boolean>;
            height: PropTypes.Requireable<number>;
            loop: PropTypes.Requireable<boolean>;
            muted: PropTypes.Requireable<boolean>;
            preload: PropTypes.Requireable<string>;
            src: PropTypes.Requireable<string>;
            width: PropTypes.Requireable<string>;
        }>>;
        resources: PropTypes.Requireable<PropTypes.InferProps<{
            sources: PropTypes.Requireable<(PropTypes.InferProps<{
                url: PropTypes.Requireable<string>;
                type: PropTypes.Requireable<string>;
            }> | null | undefined)[]>;
            poster: PropTypes.Requireable<string>;
        }>>;
        videojsOptions: PropTypes.Requireable<PropTypes.InferProps<{
            aspectRatio: PropTypes.Requireable<string>;
            fluid: PropTypes.Requireable<boolean>;
            inactivityTimeout: PropTypes.Requireable<number>;
            language: PropTypes.Requireable<string>;
            nativeControlsForTouch: PropTypes.Requireable<boolean>;
            notSupportedMessage: PropTypes.Requireable<string>;
            playbackRates: PropTypes.Requireable<(number | null | undefined)[]>;
            plugins: PropTypes.Requireable<(PropTypes.InferProps<{
                name: PropTypes.Requireable<string>;
                plugin: PropTypes.Requireable<(...args: any[]) => any>;
                options: PropTypes.Requireable<object>;
            }> | null | undefined)[]>;
        }>>;
        hideList: PropTypes.Requireable<(string | null | undefined)[]>;
        onReady: PropTypes.Validator<(...args: any[]) => any>;
        onPlay: PropTypes.Validator<(...args: any[]) => any>;
        onPause: PropTypes.Validator<(...args: any[]) => any>;
        onWaiting: PropTypes.Validator<(...args: any[]) => any>;
        onPlaying: PropTypes.Validator<(...args: any[]) => any>;
        onTimeUpdate: PropTypes.Validator<(...args: any[]) => any>;
        onSeeking: PropTypes.Validator<(...args: any[]) => any>;
        onSeeked: PropTypes.Validator<(...args: any[]) => any>;
        onEnded: PropTypes.Validator<(...args: any[]) => any>;
        onError: PropTypes.Validator<(...args: any[]) => any>;
        onLoadedData: PropTypes.Validator<(...args: any[]) => any>;
        onLoadedMetadata: PropTypes.Validator<(...args: any[]) => any>;
    };
    var defaultProps: {
        playerOptions: {
            src: string;
            hideList: never[];
        };
        resources: {
            sources: never[];
            poster: string;
        };
        videojsOptions: {
            plugins: never[];
        };
        hideList: never[];
        onReady: () => void;
        onPlay: () => void;
        onPause: () => void;
        onWaiting: () => void;
        onPlaying: () => void;
        onTimeUpdate: () => void;
        onSeeking: () => void;
        onSeeked: () => void;
        onEnded: () => void;
        onError: () => void;
        onLoadedData: () => void;
        onLoadedMetadata: () => void;
    };
}
declare namespace Player {
    interface IIndexableObject {
        [key: string]: any;
    }
    interface IVideoJsPlayer extends VideoJsPlayer {
        [key: string]: any;
    }
    interface IPlayerOptions {
        autoplay?: 'muted' | 'play' | 'any';
        controls?: boolean;
        height?: number;
        loop?: boolean;
        muted?: boolean;
        preload?: 'auto' | 'metadata' | 'none';
        src?: string;
        width?: number;
    }
    interface IResources {
        sources?: Array<videojs.Tech.SourceObject>;
        poster?: string;
    }
    interface IVideoJsOptions {
        aspectRatio?: string;
        fluid?: boolean;
        inactivityTimeout?: number;
        language?: string;
        nativeControlsForTouch?: boolean;
        notSupportedMessage?: string;
        playbackRates?: Array<number>;
        plugins?: Array<IVideoJsPlugin>;
    }
    interface IVideoJsPlugin {
        name: string;
        plugin?: (option: object) => void;
        options: object;
    }
    interface PlayerProps {
        playerOptions?: IPlayerOptions;
        resources?: IResources;
        videojsOptions?: IVideoJsOptions;
        hideList?: Array<string>;
        onReady?: (player: VideoJsPlayer) => void;
        onPlay?: (event: EventTarget, player: VideoJsPlayer, currentTimeSecond: number) => void;
        onPause?: (event: EventTarget, player: VideoJsPlayer, currentTimeSecond: number) => void;
        onWaiting?: (event: EventTarget, player: VideoJsPlayer, currentTimeSecond: number) => void;
        onPlaying?: (event: EventTarget, player: VideoJsPlayer, currentTimeSecond: number) => void;
        onTimeUpdate?: (event: EventTarget, player: VideoJsPlayer, currentTimeSecond: number) => void;
        onSeeking?: (event: EventTarget, player: VideoJsPlayer, startTimeSecond: number) => void;
        onSeeked?: (event: EventTarget, player: VideoJsPlayer, startTimeSecond: number, finishTimeSecond: number) => void;
        onEnded?: (event: EventTarget, player: VideoJsPlayer) => void;
        onError?: (error: MediaError, player: VideoJsPlayer) => void;
        onLoadedData?: (event: EventTarget, player: VideoJsPlayer) => void;
        onLoadedMetadata?: (event: EventTarget, player: VideoJsPlayer) => void;
    }
}
export default Player;
//# sourceMappingURL=index.d.ts.map