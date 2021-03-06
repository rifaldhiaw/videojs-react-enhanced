import Player from '../index';
declare function filterPlugins(plugins: filterPlugins.Plugins): [filterPlugins.AutoPlugins | undefined, filterPlugins.Plugins];
declare namespace filterPlugins {
    interface Plugins extends Array<Player.IVideoJsPlugin> {
    }
    interface AutoPlugins {
        [key: string]: any;
    }
}
export default filterPlugins;
//# sourceMappingURL=filterPlugins.d.ts.map