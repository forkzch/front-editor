<?php

namespace BFE;

class PostList
{

    /**
     * creating shortcode 
     *
     * @param [type] $atts
     * @return void
     */
    public static function user_posts_list($atts)
    {
        if(!is_user_logged_in()){
            return;
        }
        
        $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $count = 2;
        $editor_page = Editor::get_editor_page_link();
        $html = '';

        if (!$editor_page) {
            $html .= sprintf('<p><strong>%s</strong></p>', __('Please create page with editor shortcode: [short-code]'));
        }

        if (!empty($atts)) {
            $count = ($atts['count']) ? $atts['count'] : 2;
        }

        $args = [
            'posts_per_page' => $count,
            'paged' => $paged,
            'post_type' => 'post'
        ];

        if (!current_user_can('edit_others_pages')) {
            $args['author'] = get_current_user_id();
        }

        $post_lists = new \WP_Query($args);

        $html .= '<ul>';

        if ($post_lists->have_posts()) {

            while ($post_lists->have_posts()) {
                $post_lists->the_post();

                $html .= sprintf(
                    '<li><a href="%s">%s</a> <a href="%s">✏</a></li>',
                    get_the_permalink(),
                    get_the_title(),
                    Editor::get_post_edit_link(get_the_ID())
                );
            }
            $html .= '</ul>';
            $newer_page_link = get_previous_posts_link(__('< Newer'));
            $previous_page_link = get_next_posts_link(__('Previous >'), $post_lists->max_num_pages);
            $html .= sprintf('<div class="nav"><span>%s</span> <span>%s</span></div>', $newer_page_link, $previous_page_link);

            wp_reset_postdata();
        }

        return $html;
    }

}
