import { ArmyType, CardType, ICard } from 'types/ICard'

const cards: ICard[] = [
  {
    _id: 1,
    version: 1,
    data: {
      name: 'Assault troops',
      army: ArmyType.Alliance,
      cost: { materials: 0, manpower: 1, energy: 0, any: 0 },
      type: CardType.Unit,
      unique: true,
      traits: [ 'Scout' ],
      img: 'https://i.pinimg.com/originals/cc/37/e0/cc37e0892ba72ef6af2be923bfba38f5.png',
      description: 'The shame of yearning moons is parallel.',
      command: 1,
      attack: 0,
      hp: 1
    },
    meta: {
      status: 'approved',
      tags: [],
      author: 'base',
      rating: 4.11
    }
  },
  {
    _id: 2,
    version: 1,
    data: {
      name: 'Control Unit BX-208',
      army: ArmyType.Machine,
      cost: { materials: 0, manpower: 0, energy: 0, any: 0 },
      type: CardType.Agenda,
      unique: false,
      traits: [ 'Program' ],
      img: 'https://t1.thpservices.com/previewimage/gallil/fea2cd2a8f15b208416d36f3c8b9d8fe/esy-049122544.jpg',
      description: 'Earth of blessing will essentially emerge a true explosion of the volume.'
    },
    meta: {
      status: 'approved',
      tags: [],
      author: 'base',
      rating: 4.11
    }
  },
  {
    _id: 3,
    version: 1,
    data: {
      name: 'Child of Yaghrt',
      army: ArmyType.Treat,
      unique: false,
      cost: { materials: 0, manpower: 1, energy: 1, any: 0 },
      type: CardType.Unit,
      traits: [ 'AI', 'Drone' ],
      img: 'https://i.pinimg.com/originals/a5/c6/9c/a5c69cd9a9f4ed7c99510c0303035c30.jpg',
      description: 'Who can gain the totality and booda-hood of an aspect if he has the closest truth of the cow?',
      command: 2,
      attack: 2,
      hp: 2
    },
    meta: {
      status: 'approved',
      tags: [],
      author: 'base',
      rating: 4.11
    }
  },
  {
    _id: 4,
    version: 1,
    data: {
      name: 'Total Recall',
      army: ArmyType.Cult,
      unique: false,
      cost: { materials: 0, manpower: 0, energy: 0, any: 2 },
      type: CardType.Attachment,
      traits: [ 'Spell' ],
      img: 'https://i.redd.it/9xvt84yxbqw31.png',
      description: 'Be fraternal for whoever lures, because each has been facilitated with politics.'
    },
    meta: {
      status: 'approved',
      tags: [],
      author: 'base',
      rating: 4.11
    }
  },
  {
    _id: 5,
    version: 1,
    data: {
      name: 'Disarm',
      army: ArmyType.Neutral,
      unique: false,
      cost: { materials: 0, manpower: 0, energy: 1, any: 0 },
      type: CardType.Event,
      traits: [ 'Tech' ],
      img: 'https://i.pinimg.com/originals/0a/b2/8f/0ab28fcf22606f278f59706c76a77680.jpg',
      description: 'Travel and you will be remembered wisely.'
    },
    meta: {
      status: 'approved',
      tags: [],
      author: '0bGZqIEZfYZOWmSyxnRZPtA1lG52',
      rating: 4.58
    }
  },
  {
    _id: 6,
    version: 1,
    data: {
      name: 'Recycling facility',
      army: ArmyType.Machine,
      unique: false,
      cost: { materials: 2, manpower: 1, energy: 1, any: 1 },
      type: CardType.Asset,
      traits: [ 'Site' ],
      img: 'https://i.pinimg.com/originals/0a/b2/8f/0ab28fcf22606f278f59706c76a77680.jpg',
      description: 'Travel and you will be remembered wisely.'
    },
    meta: {
      status: 'approved',
      tags: [],
      author: 'base',
      rating: 4.11
    }
  },
  {
    _id: 7,
    version: 1,
    data: {
      name: 'Spoils',
      army: ArmyType.Machine,
      unique: false,
      cost: { materials: 0, manpower: 0, energy: 0, any: 0 },
      type: CardType.Special,
      traits: [ 'Resource' ],
      img: 'https://cdna.artstation.com/p/assets/images/images/013/920/956/medium/vika-yaskunova-1.jpg?1541669216',
      description: ''
    },
    meta: {
      status: 'approved',
      tags: [],
      author: 'base',
      rating: 4.11
    }
  }
]

export default cards
