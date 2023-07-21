import Database from 'better-sqlite3';
import type { Additive } from './types';

const db = new Database('database/additives.sqlite', { verbose: console.log, fileMustExist: true });

export function getAllAdditives(): Additive[] {
  const statemt = db.prepare('SELECT * FROM additives')
  const additives = statemt.all();
  return additives as Additive[];
}

export function getAdditiveById(id: string): Additive {
  const statemt = db.prepare('SELECT * FROM additives WHERE id = ?');
  const additive = statemt.get(id);
  return additive as Additive;
}

export function getAdditivesCount():number{
  const statemt = db.prepare('SELECT * FROM additives');
  const count = statemt.all().length;
  return count as number;
}

export function getHalalAdditivesCount():number{
  const statemt = db.prepare('SELECT * FROM additives WHERE halal_status=1');
  const count = statemt.all().length;
  return count as number;
}

