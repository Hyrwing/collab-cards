import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDeaf, faDragon, faThumbsUp, faThumbsDown, faVolumeMute, faLightbulb, faHandPointUp, faHandPointRight, faQuestion, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

export interface CardModel {
    title?: string;
    subtitle?: string;
    icon: IconProp;
    isNumber?: boolean;
};

export const Cards: CardModel[] = [
    { 
        title: `Can't hear you`,
        subtitle: '',
        icon: faDeaf,
    },
    { 
        title: 'ELMO!',
        subtitle: `(enough, let's move on)`,
        icon: faDragon,
    },
    { 
        title: 'YES!',
        subtitle: '',
        icon: faThumbsUp,
    },
    { 
        title: 'NO!',
        subtitle: '',
        icon: faThumbsDown,
    },
    { 
        title: `You're on mute`,
        subtitle: '',
        icon: faVolumeMute,
    },
    { 
        title: 'Great idea!',
        subtitle: '',
        icon: faLightbulb,
    },
    { 
        title: 'NEXT',
        subtitle: '',
        icon: faHandPointRight,
    },
    { 
        title: 'I volunteer',
        subtitle: '',
        icon: faHandPointUp,
    },
    {
        icon: faEllipsisH,
        title: '1',
        isNumber: true,
    },
    {
        icon: faEllipsisH,
        title: '2',
        isNumber: true,
    },
    {
        icon: faEllipsisH,
        title: '3',
        isNumber: true,
    },
    {
        icon: faEllipsisH,
        title: '4',
        isNumber: true,
    },
    {
        icon: faEllipsisH,
        title: '5',
        isNumber: true,
    },
    {
        icon: faQuestion,
    }
];

export const OctopusCards: CardModel[] = [
    {
        icon: faEllipsisH,
        title: '1',
        isNumber: true,
    },
    {
        icon: faEllipsisH,
        title: '2',
        isNumber: true,
    },
    {
        icon: faEllipsisH,
        title: '3',
        isNumber: true,
    },
    {
        icon: faEllipsisH,
        title: '4',
        isNumber: true,
    },
    {
        icon: faEllipsisH,
        title: '5',
        isNumber: true,
    },
    {
        icon: faEllipsisH,
        title: '6',
        isNumber: true,
    },
];