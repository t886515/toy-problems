class Main {
  public static void main(String[] args) {
    int x = strStr("hello", "ll");
    System.out.println(x);
  }

  public static int strStr(String haystack, String needle) {
      if (needle.equals("")) {
            return 0;
        }

        for (int i = 0; i < haystack.length() - needle.length()+1; i++) {
          System.out.println(haystack.substring(i, i+needle.length()));
            if (haystack.substring(i, i+needle.length()).equals(needle)) {

                return i;
            }
        }
        return -1;
  }

}
