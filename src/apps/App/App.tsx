import "./MainApp.scss";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ContactListPage,
  GroupPage,
  FavoritListPage,
  GroupListPage,
  ContactPage,
} from "src/pages";
import { Layout } from "src/components/Layout";
import { useEffect } from "react";
import {
  fetchContacts,
  fetchGroups,
  setFavoritesContactsAction,
} from "src/store/actions/actions";
import { useAppDispatch } from "src/hooks/hooks";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(fetchGroups());
    dispatch(setFavoritesContactsAction());
  }, [dispatch]);
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ContactListPage />} />
            <Route path="contact">
              <Route index element={<ContactListPage />} />
              <Route path=":contactId" element={<ContactPage />} />
            </Route>
            <Route path="groups">
              <Route index element={<GroupListPage />} />
              <Route path=":groupId" element={<GroupPage />} />
            </Route>
            <Route path="favorit" element={<FavoritListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
