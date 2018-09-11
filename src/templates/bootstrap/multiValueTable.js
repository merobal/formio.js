export default {
  form: `
<table class="table table-bordered">
  <tbody>
  {{rows}}
  {% if (!disabled) { %}
  <tr>
    <td colspan="2">
      <button class="btn btn-primary formio-button-add-another" ref="addButton"><i class="{{iconClass('plus')}}"></i> {{addAnother}}</button>
    </td>
  </tr>
  {% } %}
  </tbody>
</table>
`,
};
