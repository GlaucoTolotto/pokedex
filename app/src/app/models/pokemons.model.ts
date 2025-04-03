export type Pokemon = {
  abilities: Abilities[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: NameEUrl[];
  game_indices: GameIndices[];
  height: number;
  held_items: HeldIntens[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: NameEUrl;
  sprites: {
    versions: Versions;
    stats: Stats[];
    types: Types[];
    weight: number;
  };
};

type NameEUrl = {
  name: string;
  url: string;
};

type Abilities = {
  ability: NameEUrl;
  is_hidden: boolean;
  slot: number;
};

type GameIndices = {
  game_index: number;
  version: NameEUrl;
};

type VersionDetails = {
  rarity: number;
  version: NameEUrl;
};

type HeldIntens = {
  item: NameEUrl;
  version_details: VersionDetails[];
};

type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: NameEUrl;
  order: null | undefined;
  version_group: NameEUrl;
};

type Moves = {
  move: NameEUrl;
  version_group_details: VersionGroupDetails[];
};

type Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;

  other: Other;
  versions: Versions;
};

type Other = {
  dream_world: {
    front_default: string | null;
    front_female: string | null;
  };
  home: {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  'official-artwork': {
    front_default: string | null;
    front_shiny: string | null;
  };
  showdown: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: null;
  };
};

type Versions = {
  'generation-i': {
    'red-blue': {
      back_default: string | null;
      back_gray: string | null;
      back_transparent: string | null;
      front_default: string | null;
      front_gray: string | null;
      front_transparent: string | null;
    };
    yellow: {
      back_default: string | null;
      back_gray: string | null;
      back_transparent: string | null;
      front_default: string | null;
      front_gray: string | null;
      front_transparent: string | null;
    };
  };
  'generation-ii': {
    crystal: {
      back_default: string | null;
      back_shiny: string | null;
      back_shiny_transparent: string | null;
      back_transparent: string | null;
      front_default: string | null;
      front_shiny: string | null;
      front_shiny_transparent: string | null;
      front_transparent: string | null;
    };
    gold: {
      back_default: string | null;
      back_shiny: string | null;
      front_default: string | null;
      front_shiny: string | null;
      front_transparent: string | null;
    };
    silver: {
      back_default: string | null;
      back_shiny: string | null;
      front_default: string | null;
      front_shiny: string | null;
      front_transparent: string | null;
    };
  };
  'generation-iii': {
    emerald: {
      front_default: string | null;
      front_shiny: string | null;
    };
    'firered-leafgreen': {
      back_default: string | null;
      back_shiny: string | null;
      front_default: string | null;
      front_shiny: string | null;
    };
    'ruby-sapphire': {
      back_default: string | null;
      back_shiny: string | null;
      front_default: string | null;
      front_shiny: string | null;
    };
  };
  'generation-iv': {
    'diamond-pearl': {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    'heartgold-soulsilver': {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    platinum: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
  'generation-v': {
    'black-white': {
      animated: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
  'generation-vi': {
    'omegaruby-alphasapphire': {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    'x-y': {
      front_default: string | null;
      front_female: null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
  'generation-vii': {
    icons: {
      front_default: string | null;
      front_female: string | null;
    };
    'ultra-sun-ultra-moon': {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
  'generation-viii': {
    icons: {
      front_default: string | null;
      front_female: string | null;
    };
  };
};

type Stats = {
  base_stat: number;
  effort: number;
  stat: NameEUrl;
};

type Types = {
  slot: 1;
  type: NameEUrl;
};
