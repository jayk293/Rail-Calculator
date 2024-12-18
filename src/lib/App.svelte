<script lang="ts">
  import Cant from "./Cant.svelte";
  import MaximumSpeedOfACurve from "./MaximumSpeedOfACurve.svelte";
  import { Tabs, TabItem } from "flowbite-svelte";
</script>

<Tabs tabStyle="pill">
  <TabItem open title="Maximum Speed of a Curve">
    <MaximumSpeedOfACurve />
  </TabItem>
  <TabItem title="Cant">
    <Cant />
  </TabItem>
</Tabs>

<style></style>
