
import router from "next/router";

export const RefreshData = () => {
  router.replace(router.asPath);
};

export const CompareRoutes = (arr1: any[], arr2: any[]) => {
  for (var i = 0; i <= arr1.length; i++) {
    if (arr1[i] != "*" && arr2[i] != "*") {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

export const RouteArrayToString = (arr: string[]) => {
  let routeString = ""

  arr.map(routePart => {
    if (routePart != "*")
      routeString = routeString + "/" + routePart
  })

  return routeString
}