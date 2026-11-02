import { agenda } from './agenda';

const displayTitle = (title: string) => title
  .replace(/^#\d+\s*Panel discussion on\s*/i, '')
  .replace(/^Opening speech$/, 'Opening Speech')
  .replace(/^Closing speech$/, 'Closing Speech');

export const speakers = agenda.flatMap(s => (s.people || [])
  .filter(person => !person.startsWith('Moderator:'))
  .map(full => {
    const [name, ...role] = full.split(', ');
    return { name, role: role.join(', '), session: displayTitle(s.title) };
  }))
  .filter((person, index, all) => all.findIndex(item => item.name === person.name) === index);

export const moderators = agenda.flatMap(s => (s.people || [])
  .filter(person => person.startsWith('Moderator:'))
  .map(full => {
    const [name, ...role] = full.replace('Moderator: ', '').split(', ');
    return { name, role: role.join(', '), session: displayTitle(s.title) };
  }));
