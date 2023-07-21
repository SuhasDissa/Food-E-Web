<script>
  import "../app.css";
  import Navigation from "../components/Navigation.svelte";
</script>

<div class="font-sans antialiased bg-gray-100 dark:bg-gray-900 min-h-screen pt-16 pl-0 sm:pl-64">
  <Navigation />

  <!-- Page Content -->
  <main>
    <slot />
  </main>
</div>
