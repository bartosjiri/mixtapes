const compilePlaylists = (appConfig, playlistsConfig, playlistsData) => {
  let playlists = [];

  if (playlistsData.length) {
    for (let i = 0; i < playlistsData.length; i++) {
      const playlist = playlistsData[i];

      let id = playlist.id;
      let slug = playlist.name.replace(/\s+/g, '-').toLowerCase();
      let name = playlist.name;
      let image = playlist.images[0].url;
      let color = "#ffffff";
      let enabled = appConfig.enable_all;
      let order = -1;

      for (let j = 0; j < playlistsConfig.length; j++) {
        const playlistConfig = playlistsConfig[j];

        if (playlist.id == playlistConfig.id) {
          image = playlistConfig.image || image;
          color = playlistConfig.color || color;
          enabled = playlistConfig.enabled || enabled;
          order = playlistConfig.order || order;
        }
      }

      if (enabled) {
        playlists = [...playlists, {id, slug, name, image, color, order}];
      }
    }
  };

  return playlists;
}

export default compilePlaylists;