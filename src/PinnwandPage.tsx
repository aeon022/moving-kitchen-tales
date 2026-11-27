import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useBookmarks, BookmarkList, Bookmark } from './hooks/useBookmarks';
import { useLang } from './App';

export function PinnwandPage({ plans }: { plans: any[] }) {
  const { lang } = useLang();
  const { bookmarkLists, createList, deleteList, removeFromList } = useBookmarks();
  const [newListName, setNewListName] = useState('');

  const totalBookmarks = useMemo(
    () => bookmarkLists.reduce((sum, list) => sum + list.bookmarks.length, 0),
    [bookmarkLists]
  );

  const handleCreateList = (event: React.FormEvent) => {
    event.preventDefault();
    const name = newListName.trim();
    if (!name) return;
    createList(name);
    setNewListName('');
  };

  const getPlanTitle = (bookmark: Bookmark) => {
    const plan = plans.find((p) => p.slug === bookmark.planSlug);
    return plan?.meta?.title ?? bookmark.planTitle;
  };

  return (
    <div className="main-inner pinboard-page">
      <header className="pinboard-header">
        <div>
          <h1>{lang === 'de' ? 'Pinnwand' : '收藏板'}</h1>
          <p>
            {bookmarkLists.length} {lang === 'de' ? 'Listen' : '个列表'} · {totalBookmarks}{' '}
            {lang === 'de' ? 'Rezepte' : '道食谱'}
          </p>
        </div>
        <Link className="pinboard-header-link" to="/bookmarks">
          <span aria-hidden="true">★</span>
          {lang === 'de' ? 'Merkliste' : '我的收藏'}
        </Link>
      </header>

      <form className="pinboard-create" onSubmit={handleCreateList}>
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          placeholder={lang === 'de' ? 'Neue Liste' : '新列表名称'}
        />
        <button type="submit">{lang === 'de' ? 'Erstellen' : '新建'}</button>
      </form>

      {bookmarkLists.length === 0 ? (
        <section className="pinboard-empty">
          <div className="pinboard-empty-icon" aria-hidden="true">☆</div>
          <h2>{lang === 'de' ? 'Noch keine Pinnwände' : '还没有收藏板'}</h2>
          <p>{lang === 'de' ? 'Erstelle eine Liste und sammle Rezepte nach Thema.' : '新建一个列表，按主题收藏食谱。'}</p>
        </section>
      ) : (
        <section className="pinboard-grid">
          {bookmarkLists.map((list: BookmarkList) => (
            <article key={list.id} className="pinboard-list">
              <div className="pinboard-list-head">
                <div>
                  <h2>{list.name}</h2>
                  <span>
                    {list.bookmarks.length} {lang === 'de' ? 'Rezepte' : '道食谱'}
                  </span>
                </div>
                <button
                  type="button"
                  className="pinboard-delete-list"
                  onClick={() => deleteList(list.id)}
                  title={lang === 'de' ? 'Liste löschen' : '删除列表'}
                  aria-label={lang === 'de' ? `${list.name} löschen` : `删除${list.name}`}
                >
                  ×
                </button>
              </div>

              {list.bookmarks.length === 0 ? (
                <p className="pinboard-list-empty">
                  {lang === 'de' ? 'Noch keine Rezepte in dieser Liste.' : '这个列表里还没有食谱。'}
                </p>
              ) : (
                <ul className="pinboard-recipes">
                  {list.bookmarks.map((bookmark: Bookmark) => (
                    <li key={`${bookmark.planSlug}-${bookmark.recipeId}`}>
                      <Link to={`/plan/${bookmark.planSlug}#meal-${bookmark.recipeId}`}>
                        <strong>{bookmark.recipeTitle}</strong>
                        <span>{getPlanTitle(bookmark)}</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeFromList(list.id, bookmark.planSlug, bookmark.recipeId)}
                        title={lang === 'de' ? 'Aus Liste entfernen' : '从列表中移除'}
                        aria-label={lang === 'de' ? `${bookmark.recipeTitle} entfernen` : `移除${bookmark.recipeTitle}`}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
